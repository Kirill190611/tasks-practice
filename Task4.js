//Call, apply, bind

//apply\call (immediately execute the function, the difference between the two functions is how to pass parameters...    apply - array, call - comma )

function foo(age, city) {
    console.log(`${this.name}, ${age}, ${city}`)
}

let a = {name: 'Kirill'}
let b = {name: 'Kirill123'}

foo.apply(a, [31, 'Obninsk'])
foo.call(b, 21, 'Lipetsk')