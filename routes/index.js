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
                blogParas = blogPost.post.split("\n")
                blogParas.push(blogPost.signature)
                return blogParas
            });
            res.render('index', { title: 'Fellow Traveler', downloadURL: 'http://' + appDomain + '/downloads',
                                  postList: postList});
        });
    })

});

router.get('/dothing', function(req,res,next) {
    res.status(404)
    res.render("");
});

router.get('/downloads', function(req, res, next) {
    res.render('downloads', { title: 'Downloads'});
});

module.exports = router;
