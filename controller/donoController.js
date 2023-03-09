const Dono = require("../model/Dono");
const Casa = require("../model/Casa");

function abreadd(req, res) {
    Casa.find({}, function (err, casas) {
        res.render('dono/add', {
            Casas: casas
        })
    })

}




function add(req, res) {
    let dono = new Dono({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        foto: req.file.filename,
        casa: req.body.casa
    })


    dono.save(function (err) {
        if (err) {
            console.log(err);
        } else {

            res.redirect('/dono/lst')
        }
    });
}

function list(req, res) {
    Dono.find({}, function (err, donos) {
        res.render('dono/lst', {
            Donos: donos
        })
    })
}

function filtro(req, res) {
    Dono.find({
        nome: new RegExp(req.body.pesquisar, 'i')
    }, function (err, donos) {
        res.render('dono/lst', {
            Donos: donos
        })
    })
}

function del(req, res) {
    Dono.findByIdAndDelete(req.params.id, function (err, dono) {
        res.redirect('/dono/lst')
    })
}

function abreedt(req, res) {
    Casa.find({}, function (err, casas) {
        Dono.findById(req.params.id, function (err, dono) {
            res.render('dono/edt', {
                'Dono': dono,
                'Casas': casas
            })
        })
    })

}

function edt(req, res) {
    Dono.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        foto: req.body.foto,
        casa: req.body.casa
    }, function (err, dono) {
        res.redirect('/dono/lst')
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