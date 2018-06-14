const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/**', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(function (err, req, res, next) {
    res.json({"error" : err.name + ": " + err.message});
});

const port = process.env.port || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`port listening on port ${port}`);
    });