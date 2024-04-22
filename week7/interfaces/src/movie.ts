class Movie implements Item {

    constructor(public year, public director, public title){}

    display() {
        console.log(`${this.year}, ${this.director}, "${this.title}"`);
    }
}