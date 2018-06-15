const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, 'public')));

//download my cv
app.get('/cv', (req, res) => {

    const file = fs.createReadStream(__dirname + '/public/CV_Adam_Mendak.pdf');
    const stat = fs.statSync(__dirname + '/public/CV_Adam_Mendak.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=CV_Adam_Mendak.pdf');
    file.pipe(res);
});

app.get('/**', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(function (err, req, res, next) {
    res.json({"error" : err.name + ": " + err.message});
});

//for heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`port listening on port ${port}`);
});