const data = require('./core/data');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use('/css', express.static('static/css'));
app.use('/fonts', express.static('static/fonts'));
app.use('/img', express.static('static/img'));
app.use('/js', express.static('static/js'));

app.get('/', (req, res) => {
    let indexPage = fs.readFileSync('./static/index.html', 'utf8');
    res.send(indexPage);
})

app.get('/ingredients', (req, res) => {
    let dish = req.query['dish'];
    if (dish == 'gimbab') {
        res.send(data.getGimbabIngredients());
    } else if (dish == 'beefnoodlesalad') {
        res.json(data.getBeefNoodleSaladIngredients());
    } else {
        res.send({ msg: "Dish not found!" });
    }
});

app.use((req, res, next) => {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>")
});

const port = 8000;
app.listen(port, () => {
    console.log("Recipe app listening on port " + port + "!");
});