// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large}; // const = compiler generate more optimized code

let mySize: Size = Size.Medium;
console.log('mySize = ', mySize);