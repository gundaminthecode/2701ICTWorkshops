class Person {
    name: string;
    age: number;

    constructor(name:string,age:number = 18) {
        this.name = name;
        this.age = age;
    }
}

let person:Person = new Person('Fred');
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');