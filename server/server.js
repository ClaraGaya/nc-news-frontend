const express = require('express');
const path = require('path');
const app = express();

app.get('/api', (req, res) => {
    res.send('OK');
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = app;