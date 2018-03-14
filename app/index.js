
class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person {
    constructor(name, catchPhrase){
        super(name);
        this.phrase = catchPhrase;
    }

    sayPhrase(){
        return this.phrase;
    }

    sayBye(){
        return `My name is ${this.name}, good day`;
    }

    sayHello(){
        return super.sayHi() + `, Howdy, I\'m new here.`
    }

}


const bob = new SuperPerson('bob', 'Up up and Bob\'s away');

console.log('Bob: ', bob.sayHi());
console.log('Bob: ', bob.sayBye());
console.log('Bob: ', bob.sayPhrase());
console.log('Bob: ', bob.sayHello())