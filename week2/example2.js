var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person('Fred', 30);
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');
