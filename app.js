const express = require('express');
const app = express();

const hbs = require('hbs');
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//middleware

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/works', (req, res) => {
    res.render('works');
})


const port = 3000;
app.listen(port, () => console.log('app running'))