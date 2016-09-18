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
        collection.find({}).toArray(function(err,docs) {
            postList = docs.map(function(blogPost){
                // console.log(blogPost);
                return formatBlogPost(blogPost);
            });
            res.render('index', { title: 'Fellow Traveler', downloadURL: 'http://' + appDomain + '/downloads',
                                  postList: postList});
        });
    })

});

function formatBlogPost(dbpost) {
    blogParas = dbpost.postBody.split("\n");
    nextSnip = 0;
    blogPostElements = blogParas.map(function(para){
        if (para.includes("<code/>")) {
            para.replace("<code/>","");
            return { content: dbpost.codeSnippits[nextSnip++], type: "code"}
        } else {
            console.log("this one is not");
        }

        // console.log("here it is after the replace :\n" + para);
        return {content: para, type: "text"};
    });

    console.log("after the replacement:\n" + blogPostElements);


    blogPostElements.push({content: dbpost.name + " " + dbpost.date});
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
