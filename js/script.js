/* Задача 1 */
// 1 - TypeError 
const x = 1;
const y = 2;
console.log(y());

// 2 - SyntaxError
const movie = ("God Father");
const showGoodMovie = ( => {
    console.log (movie + " - good film!");
};

console.log(showGoodMovie());

// 3 - ReferenceError
const sum = (a,b) => {
    return a + b;
};
console,log(sum(2,4));

// 4 - LogicError
 const bodySpeed = (S, t) => {
     return V = t/S; // V = S/t
 };

 console.log(bodySpeed(12, 15));


/* Задача 2 */

const differenceSumSquare = (n) => {
    let sum = 0;
    let sumSquare = 0;

    for (let i = 1; i<=n; i++) {
        sum += i;
        sumSquare += i ** 2; // сумма квадратов
    };

const squareSum = sum ** 2; // квадрат суммы
return squareSum - sumSquare;
};

console.log(differenceSumSquare(10));

