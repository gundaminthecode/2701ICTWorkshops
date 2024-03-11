var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = 18; }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person('Fred');
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');
