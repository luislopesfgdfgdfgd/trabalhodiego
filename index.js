const express = require("express");
const app = express();
const path = require("path");

var moment= require('moment')
app.locals.moment = moment;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const donoRoute = require("./routes/donoRoute")
const casaRoute = require("./routes/casaRoute")
const postRoute = require("./routes/postRoute")
const publicRoute = require("./routes/publicRoute")

app.use('/',donoRoute);
app.use('/',casaRoute);
app.use('/',postRoute);
app.use('/',publicRoute);

app.listen(3000, function(){
  console.log("Servidor funcionando na porta 3000")
});
