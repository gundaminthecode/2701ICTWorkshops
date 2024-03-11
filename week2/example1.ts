class Person{
    name: string;
    age: number;

    constructor() {
        this.name = 'Todd';
        this.age = 22;
    }
}

let person:Person = new Person();
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');