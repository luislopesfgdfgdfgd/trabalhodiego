const Post = require("../model/Post");
const Casa = require("../model/Casa");
const Dono = require("../model/Dono");

function index(req, res) {

    Post.find({}).populate('casa').exec(function (err, posts) {
        res.render('publica/index', {
            Posts: posts,
        })
    })




}



module.exports = {
    index
}