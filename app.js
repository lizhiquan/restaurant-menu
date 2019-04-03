const data = require('./core/data');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const admin = require('firebase-admin');
const serviceAccount = require("./apple-cdd1b-firebase-adminsdk-bvz4f-d811c7cd9e.json");

const port = 8000;
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://apple-cdd1b.firebaseio.com"
});

app.use('/css', express.static('static/css'));
app.use('/img', express.static('static/img'));
app.use('/js', express.static('static/js'));

app.get('/', (req, res) => {
    let indexPage = fs.readFileSync('./static/index.html', 'utf8');
    res.send(indexPage);
});

app.get('/dishes', (req, res) => {
    let dish = req.query['type'];
    if (dish == 'breakfast') {
        res.send(data.getBreakfastDishes());
    } else if (dish == 'lunch') {
        res.json(data.getLunchDishes());
    } else if (dish == 'dinner') {
        var db = admin.database();
        db.ref()
            .child("dishes")
            .once("value", function (snapshot) {
                res.json(snapshot.val());
            });
    } else {
        res.send({ msg: "Type not found!" });
    }
});

app.use((req, res, next) => {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>")
});

app.listen(port, () => {
    console.log("Menu app listening on port " + port + "!");
});