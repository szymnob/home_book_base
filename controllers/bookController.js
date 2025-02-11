const Book = require('../models/Book');

class BookController {
    // Pobieranie wszystkich książek
    async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            res.render('index', { books });
        } catch (err) {
            console.error(err);
            res.status(500).send('Błąd serwera');
        }
    }

    // Formularz dodawania książki
    getAddBookForm(req, res) {
        res.render('add');
    }

    // Dodawanie nowej książki
    async addBook(req, res) {
        const { title, author, year } = req.body;
        try {
            await Book.create({ title, author, year });
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Błąd zapisu do bazy danych');
        }
    }

    // Formularz edycji książki
    async getEditBookForm(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            res.render('edit', { book });
        } catch (err) {
            console.error(err);
            res.status(500).send('Błąd pobierania książki');
        }
    }

    // Edycja książki
    async editBook(req, res) {
        try {
            await Book.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Błąd edycji książki');
        }
    }

    // Usuwanie książki
    async deleteBook(req, res) {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Błąd usuwania książki');
        }
    }
}

module.exports = new BookController();
