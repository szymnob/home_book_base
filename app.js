require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BookModel = require('./models/book');
const expressLayouts = require('express-ejs-layouts')


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout','layouts/layout');

const DB = process.env.DB_URI + "?authSource=admin";

mongoose.connect(DB)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error("Connection error: ", err))



// Importowanie tras
const bookRoutes = require('./routes/bookRoutes');
app.use('/', bookRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na http://localhost:${PORT}`));

module.exports = app;
