//Call, apply, bind

//Bind: doesn't execute the function, returns another function with the context set forever

function foo() {
    console.log(this.name)
}

let a = {name: 'Kirill'}
let b = {name: 'Kirill123'}

const bindedFooA = foo.bind(a)
const bindedFooB = foo.bind(b)

bindedFooA()
bindedFooB()

function foo1(age, city) {
    console.log(`${this.name}, ${age}, ${city}`)
}

let c = {name: 'Kirill'}
let d = {name: 'Kirill123'}

const bindedFooC = foo1.bind(a, 30)
const bindedFooD = foo1.bind(b, 31)

bindedFooC('Kaluga')
bindedFooD('Moscow')

