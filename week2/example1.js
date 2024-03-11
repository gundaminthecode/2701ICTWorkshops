var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Todd';
        this.age = 22;
    }
    return Person;
}());
var person = new Person();
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');
