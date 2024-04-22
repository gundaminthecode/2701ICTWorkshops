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
var book = new Book(1776, "Adam Smith", "The Nature and Cause of the Wealth of Nations");
book.display();
