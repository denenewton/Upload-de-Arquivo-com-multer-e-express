require('dotenv').config()
require('./src/database/database')
const express = require('express');
const routeUploads = require('./src/routes/routeUploads')
const app = express();

app.set('view engine', 'ejs')

app.use('/', routeUploads);

app.listen(8080, () => {
    console.log('\nservidor rodando na porta 8080')
    console.log('CRLT + Click em http://localhost:8080\n')
})