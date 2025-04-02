const express = require('express');
const _ = require('lodash');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Добро пожаловать на мой сервер!');
});

app.get('/random', (req, res) => {
    const randomNumber = _.random(1, 100);
    res.json({ random: randomNumber });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});