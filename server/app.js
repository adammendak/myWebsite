const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static')
const router = express.Router();

app.use('/', express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
    res.render('public/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
