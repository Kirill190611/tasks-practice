//Classes in JS
class Animal {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log('I walk ' + this.name)
    }
    eat() {
        console.log('I can eat')
    }
}

class Rabbit extends Animal {
    walk() {
        super.walk()
        console.log('... and jump!')
    }
}

let animal = new Animal('Kur')

let rabbit = new Rabbit('Bunny')
animal.walk()
animal.eat()
console.log(animal.name)

console.log(rabbit.name)
rabbit.walk()
rabbit.eat()