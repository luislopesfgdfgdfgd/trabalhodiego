const Post = require("../model/Post");
const Casa = require("../model/Casa");
const Dono = require("../model/Dono");

function abreadd(req, res) {
    Casa.find({}, function (err, casas) {
        Dono.find({}, function (err, donos) {
            res.render('post/add', {
                Donos: donos,
                Casas: casas
            })
        })


    })

}

function add(req, res) {
    let post = new Post({
        texto: req.body.texto,
        data: new Date(),

        dono: req.body.dono,
        casa: req.body.casa
    })


    post.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/blog')
        }
    });
}

function list(req, res) {
    Post.find({}, function (err, posts) {
        res.render('post/lst', {
            Posts: posts
        })
    })
}

function filtro(req, res) {
    Post.find({
        texto: new RegExp(req.body.pesquisar, 'i')
    }, function (err, posts) {
        res.render('post/lst', {
            Posts: posts
        })
    })
}

function del(req, res) {
    Post.findByIdAndDelete(req.params.id, function (err, post) {
        res.redirect('/blog')
    })
}

function abreedt(req, res) {
    Post.findById(req.params.id, function (err, post) {
        Dono.find({}).exec(function (err, donos) {
            Casa.find({}, function (err, casas) {
                res.render('post/edt', {
                    'Post': post,
                    Dono: donos,
                    Casas: casas

                })
            })
        })

    })
}

function edt(req, res) {
    Post.findByIdAndUpdate(req.params.id, {
        texto: req.body.texto,
        data: new Date(),

        dono: req.body.dono
    }, function (err, post) {
        res.redirect('/blog')
    })
}

module.exports = {
    abreadd,
    add,
    list,
    filtro,
    abreedt,
    edt,
    del
}