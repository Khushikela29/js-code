const Arr = [ 1, 2 , 3 , 4]

console.log(Arr);

Arr.push(10)
Arr.pop()
Arr.unshift(0)

console.log(Arr.includes(9));
console.log(Arr.indexOf(4));
console.log(Arr);

//slice,splice

console.log("A", Arr);

let newArr = Arr.slice(1,3)
console.log(newArr);

console.log("B", Arr);
let newArr2 = Arr.splice(1,3)
console.log("B", Arr);
console.log(newArr2);
