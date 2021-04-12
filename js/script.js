//ex.1
const sum = 55 * 7 + 2 / 4 + 2;
const result = 55 * (7 + 2) / (4 + 2);
console.log(result);



//ex.2
let name = ("Женя");
console.log(name);

const year = ("1993");
console.log(year);

const message = (name) => {
  console.log("Привет,", name);
};
message("Женя");



//ex.3
const average = (a, b) => (a + b) / 2;
console.log(average(4, 6));

const square = (x) => x ** 2;
console.log(square(4));

const cube = (x) => Math.pow(x, 3);
console.log(cube(2));



//ex.4
const square = (x) => x ** 2; //вызвал функцию square
const cube = (x) => x ** 3; // вызвал функцию cube
const average = (square, cube) => (a + b) / 2; // Передал квадрат и куб каждой интерации в функцию average
const calc = () => {
  const result = [];
  for (let x = 0; x < 10; x++) {
    const result = calc[x];
  };
 return result;
};

//а с концовкой так и не смог разобраться