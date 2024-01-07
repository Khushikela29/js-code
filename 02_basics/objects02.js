//singleton

const user = new Object()  //singleton
// const user = {}     //non singleton

user.id = 1234
user.name = "khushi"
user.date = "12/11/1231"
console.log(user);

const newUser = {
    email : "hdfsug@ygsgr",
    fullname : {
        userfullname : {
            firstname : "khushi",
            lastname : "kela"
        }
    }
}

console.log(newUser.fullname.userfullname.firstname);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 3 : "d"}

const obj3 = Object.assign({}, obj1 , obj2)
console.log(obj3);