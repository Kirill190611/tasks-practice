//Filter method
let x = ['Minsk', 'Moscow', '', '', 'London', '']
let y = x.filter((el) => el !== "")
console.log(x)
console.log(y)

let x1 = [
    {age: 18, sex: 'f', name: 'Sveta'},
    {age: 17, sex: 'f', name: 'Sashka'},
    {age: 19, sex: 'm', name: 'Andrew'}
]
let y1 = x1.filter((person) => person.age >= 18 && person.sex === 'f')
console.log(x1)
console.log(y1)