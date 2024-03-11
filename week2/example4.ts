class Person {

    constructor(public name:string, public age:number = 18) {

    }
}

let person:Person = new Person('Fred');
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');