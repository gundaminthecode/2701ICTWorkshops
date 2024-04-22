var Book = /** @class */ (function () {
    function Book(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }
    Book.prototype.display = function () {
        console.log("".concat(this.year, ", ").concat(this.author, ", \"").concat(this.title, "\""));
    };
    return Book;
}());
var Movie = /** @class */ (function () {
    function Movie(year, director, title) {
        this.year = year;
        this.director = director;
        this.title = title;
    }
    Movie.prototype.display = function () {
        console.log("".concat(this.year, ", ").concat(this.director, ", \"").concat(this.title, "\""));
    };
    return Movie;
}());
var bookItem = new Book(1776, "Adam Smith", "The Nature and Cause of the Wealth of Nations");
bookItem.display();
var movieItem = new Movie(2007, "Michael Bay", "Transformers");
movieItem.display();
