//Date

let MyDate = new Date()
console.log(MyDate);
console.log(MyDate.getTime());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleString());
console.log(typeof MyDate);

let mycreatedDate = new Date(2003 , 10 ,29)
console.log(mycreatedDate.toString());
console.log(mycreatedDate.toLocaleString());

let MyTime = Date.now()
console.log(MyTime);
console.log(mycreatedDate.getTime());