const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Mvrk',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Mvrk',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Mvrk',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/back/404.html' )
})

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    )
})