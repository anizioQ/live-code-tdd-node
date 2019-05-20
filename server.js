/* Arquivo: server
Author: Anizio Queiroz
Description: Arquivo principal e responsável por executar a API.
Data: 19/05/2019 */
 
const express = require('express');

const app =  express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const configDb = require('./src/config/database');

mongoose.Promise = global.Promise;

// Aqui a gente faz a chamada da 'url' da conexão da base de dados da nossa aplicação:
mongoose.connect(configDb.local.localUrl, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.json({
    message: 'Sejam Bem-Vindos(as) a API: Live Coding - Glaucia Lemos!'
}));

app.listen(port);
console.log(`Aplicação executando na porta...: ${port}`);

module.exports = app;

