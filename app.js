const express = require('express')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html' )
})

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html' )
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' )
})

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    )
})