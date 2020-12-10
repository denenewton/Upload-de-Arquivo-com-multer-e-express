require('dotenv').config()
require('./src/database/database')
const express = require('express');
const {resolve} = require('path')
const routeUploads = require('./src/routes/routeUploads')
const app = express();

app.use(express.static(resolve(__dirname, 'public')));
app.set('views',resolve(__dirname,'views'));
app.set('view engine', 'ejs')

app.use('/', routeUploads);

app.listen(8080, () => {
    console.log('\nservidor rodando na porta 8080')
    console.log('CRLT + Click em http://localhost:8080\n')
})