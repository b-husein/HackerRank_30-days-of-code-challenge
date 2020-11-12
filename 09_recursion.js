'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the factorial function below.
function factorial(n) {
     // if n is null, or n is undefined
    if (n == null || n == undefined)
        // throw error
        throw new TypeError("Required params missing");

    // if n is not equal to 'number'
    if (typeof n !== 'number')
        // throw error
        throw new TypeError("n is expected to be of type: number");

    // explanation. Number.isInteger checks if the target value is an integer, return true, otherwise return false.
    // By using !(not) operator then, if the value is not an integer, return true, otherwise return false.
    if (!Number.isInteger(n))
        // throw error
        throw new TypeError("n is expected to be an Integer");

    // if n is smaller than 0 (negative)
    if (n < 0)
         // throw error
        throw new TypeError("n cannot be negative");

    // if n is less than equal to 2 return n
    // because 2! is 2 * 1
    // 1! is 1
    if (n <= 2)
        return n;

    // using recursive method
    // ex. n = 5 then 5 * 4 * 3 * 2 * 1
    return n * factorial(n - 1);
}

module.exports = factorial;

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}
