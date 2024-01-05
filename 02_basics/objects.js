//object literals

const MySym = Symbol("key1")


const Jsuser = {
    name : "Khushi",  //by deafault it takes it as string
    age : 20,
    email : "khudshfs@jgefs",
    [MySym] : "key2",
    thelastlogin : ["Monday"]
}

console.log(Jsuser.name);
console.log(Jsuser["name"]);  //when using square bracket objects should be in double inverted commas
console.log(Jsuser[MySym]);   // no double inverted commas

// Jsuser.email = "egfrgjrgfhf"
// Object.freeze(Jsuser)
// console.log(Jsuser);


// FUNCTIONS 

Jsuser.greeting = function() {
    console.log("Hello this is a function");
}
Jsuser.greeting2 = function() {
    console.log(`Hello this is a, ${ this.name }`);
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting2());