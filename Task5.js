//Map method
const a = ['1', '2', '3']
let b = a.map(el => +el)
console .log(b)

const a1 = [18, 20, 22]
let b1 = a1.map((age) => {
    if (age >= 18) {
        return {age: age, adult: true}
    } else {
        return {age: age, adult: false}
    }
})

console.log(b1)