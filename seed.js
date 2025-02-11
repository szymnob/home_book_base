require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book'); // Importujemy model książki

mongoose.connect(process.env.DB_URI + "?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected"))
    .catch(err => console.error("Error", err));

const sampleBooks = [
    { title: "Wiedźmin: Ostatnie Życzenie", author: "Andrzej Sapkowski", year: 1993 },
    { title: "Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Pan Tadeusz", author: "Adam Mickiewicz", year: 1834 }
];

async function seedDatabase() {
    try {
        await Book.deleteMany();
        await Book.insertMany(sampleBooks);
        console.log("Sample books added");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error:", err);
    }
}

seedDatabase();
