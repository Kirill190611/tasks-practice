//Closure: counter
function makeCounter() {
    let currentCount = 1
    return function () {
        return currentCount++
    }
}

let counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())

let counter1 = makeCounter()
console.log(counter1())