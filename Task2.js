//Recursion: Fibonacci, Factorial, Successive Numbers from 0 to N

//Factorial
function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}
console.log(factorial(4))

//Fibonacci
function fib(m) {
    return m <= 1 ? m : fib(m - 1) + fib(m - 2)
}
console.log(fib(7))

//Sum numbers from 0 to X
function sumTo(x) {
    if (x === 1) return 1
    return x + sumTo(x - 1)
}

console.log(sumTo(5))