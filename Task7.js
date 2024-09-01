//Reducer method
const x = ['Minsk', 'Moscow', '', '', 'London', '']
let y = x.reduce((acc, el) => {
    if (el !== "") acc++
    return acc
}, 0)
console.log(y)

const x1 = [
    { age: 18, sex: 'f', name: 'Sveta' },
    { age: 17, sex: 'f', name: 'Sashka' },
    { age: 19, sex: 'm', name: 'Andrew' }
]
let y1 = x1.reduce((acc, person) => {
    if (person.age >= 18 && person.sex === 'f') {
        acc.push(person)
    }
    return acc
}, [])
console.log(y1)

const x2 = [1, 4, 6, 66, -12]
const y2 = x2.reduce((acc, number) => {
    acc = acc + number
    return acc
}, 0)
console.log(y2)