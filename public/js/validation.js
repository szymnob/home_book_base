document.getElementById("addBook").addEventListener("submit", function(event) {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let year = document.getElementById("year");
    let errorMessage = document.getElementById("error-message");

    if (title.value.length < 3 || title.value.length > 100) {
        errorMessage.innerText = "Tytuł musi mieć od 3 do 100 znaków!";
        event.preventDefault();
        return;
    }

    if (author.value.length < 3 || author.value.length > 50) {
        errorMessage.innerText = "Autor musi mieć od 3 do 50 znaków!";
        event.preventDefault();
        return;
    }

    if (year.value < 1400 || year.value > 2025) {
        errorMessage.innerText = "Rok wydania musi być między 1400 a 2025!";
        event.preventDefault();
        return;
    }

    errorMessage.innerText = "";
});