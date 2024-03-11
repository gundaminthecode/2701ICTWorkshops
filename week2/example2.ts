class Person {
    name: string;
    age: number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
}

let person:Person = new Person('Fred', 30);
console.log('Hello ' + person.name + '. You are ' + person.age + ' years old.');