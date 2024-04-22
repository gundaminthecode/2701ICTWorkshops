class Subject {
    callbacks;
    constructor() {
        this.callbacks = [];
    }

    subscribe(fn) {this.callbacks.push(fn);}

    publish(fn) {this.callbacks.forEach(fn => fn(data));}
}

const subject = new Subject();

for (let i=0; i<5; i++){
    setTimeout(() =>{
        subject.publish('data' + i);
        console.log(`data ${i} published ${i} and hald seconds after`);
    }, 500+1000*i);
}

const observer1 = (data) => console.log(`Observer1 received data: ${data}`);
const observer2 = (data) => console.log(`Observer2 received data: ${data}`);
const observer3 = (data) => console.log(`Observer3 received data: ${data}`);

setTimeout(() => {
    subject.subscribe(observer1);
    console.log("observer1 subscribes 1 second after")
}, 1000);

setTimeout(() => {
    subject.subscribe(observer2);
    console.log("observer2 subscribes 2 seconds after")
}, 2000);