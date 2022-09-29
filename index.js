const express = require('express');
const app = express();
const PORT = 8080;
const hbs = require('hbs');
const path = require('path');
const nodemailer = require('nodemailer');


app.use(express.json());
app.use(express.static(path.join(__dirname + "/assets")));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res)=>{
    res.render('index', {titulo: 'IRRADIACIÓN NATURAL'})
})
app.get('/laobra', (req, res)=>{
    res.render('laobra', {titulo: 'LA OBRA'})
})
app.get('/bio', (req, res)=>{
    res.render('bio', {titulo: 'BIO'})
})
app.get('/contacto', (req, res)=>{
    res.render('contacto', {titulo: 'CONTACTAME'})
})
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})