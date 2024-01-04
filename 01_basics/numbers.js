const score= 400
console.log(score);

const balance= new Number(300)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

// round off values
const othernum= 469.5697
console.log(othernum.toPrecision(4));


// maths

console.log(Math)
console.log(Math.round(45.7));
console.log(Math.floor(67.6));
console.log(Math.max(4,7,9,3));
console.log(Math.abs(-7));

console.log(Math.random());
console.log(Math.random() * 10);  //avoid 0

const max=1
const min=10
console.log(Math.floor(Math.random() * (max - min + 1)+ min))  //avoid decimal