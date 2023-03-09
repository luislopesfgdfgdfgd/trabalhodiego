const Casa = require("../model/Casa");
const Dono = require("../model/Dono");

function abreadd(req, res) {
    res.render('casa/add')
}

function add(req, res) {
    console.log("oi")
    console.log(req.file)
    let casa = new Casa({
        preco_noite: req.body.preco_noite,
        endereco: req.body.endereco,
        foto: req.file.filename,
    })

    casa.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/casa/lst')
        }
    });
}

function list(req, res) {
    Casa.find({}, function (err, casas) {
        res.render('casa/lst', {
            Casas: casas
        })
    })
}

function filtro(req, res) {
    Casa.find({
        endereco: new RegExp(req.body.pesquisar, 'i')
    }, function (err, casas) {
        res.render('casa/lst', {
            Casas: casas
        })
    })
}

function del(req, res) {
    Casa.findByIdAndDelete(req.params.id, function (err, casa) {
        res.redirect('/casa/lst')
    })
}

function abreedt(req, res) {
    Casa.findById(req.params.id, function (err, casa) {
        res.render('casa/edt', {
            'Casa': casa
        })
    })
}

function abreadd(req, res) {
    res.render('casa/add')
}



function edt(req, res) {
    Casa.findByIdAndUpdate(req.params.id, {
        preco_noite: req.body.preco_noite,
        endereco: req.body.endereco,
        foto: req.file.filename,
    }, function (err, casa) {
        res.redirect('/casa/lst')
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