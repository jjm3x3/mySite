var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb');

var URL = 'mongodb://localhost:27017/mySite'
var POSTDOC = 'post'
// OH so this is what happens after school
   
           Array.prototype.flatMap = function(lambda) {
               return Array.prototype.concat.apply([], this.map(lambda));
           };

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoClient.connect(URL, function(err, db) {
        var collection = db.collection('post');
        collection.find({}).sort({date: -1}).toArray(function(err,docs) {
            var postList = docs.map(function(blogPost){
                // console.log(blogPost);
                return formatBlogPost(blogPost);
            });
            res.render('index', { title: 'Fellow Traveler', downloadUrl: 'http://' + appDomain + '/downloads',
                                  postList: postList});
        });
    })

});

function formatBlogPost(dbpost) {
    blogParas = dbpost.postBody.split("\n");
    nextSnip = 0;
    blogPostElements = blogParas.map(function(para){
        if (para.indexOf("<code/>") != -1) {
            para.replace("<code/>","");
            var code = dbpost.codeSnippits[nextSnip++]
            return { content: code , type: "code"};
        }else if (para.indexOf("![") != -1) {
            var linkIndicator = para.indexOf("](");
            var endOfLink = para.indexOf(")",linkIndicator + 1);
            var ref  = para.substring(linkIndicator + 2, endOfLink);
            var url = "http://localhost:3000/pictures/" +  ref;

            console.log("what is your value " + url);
            return {content: url, type: "Picture"};
        } else if (para.indexOf("](") != -1){
            return {content: para, type: "textWithLinks"};
            
        } else {
            // console.log("this one is not");
        }

        // console.log("here it is after the replace :\n" + para);
        return {content: para, type: "text"};
    });

    // console.log("after the replacement:\n" + blogPostElements);


    console.log("here is the date.length: " + dbpost.date.length);
    console.log("here is the date: " + dbpost.date);
    if (dbpost.date.lenght < 12) {
        var friendlyDate = dbpost.date
    } else {
        var theDate = new Date(dbpost.date);
        var friendlyDate =  (theDate.getMonth() + 1) + "-" + (theDate.getDate() + 1) + "-" + (1900 + theDate.getYear());
        console.log("better date format?:" + friendlyDate);
    }
    blogPostElements.push({content: dbpost.name + " " + friendlyDate});
    return blogPostElements;
}

router.get('/dothing', function(req,res,next) {
    res.status(404)
    res.render("");
});

router.get('/downloads', function(req, res, next) {
    res.render('downloads', { title: 'Downloads'});
});

module.exports = router;
