const user1 = {
    name: "user1",
    email: "user@gmail.com",
    address: "Mathura",
    ottsubscriptions: {
        netflix: "basic",
        amazonPrime: "premium"
    },
    show: function showDetails(){
        console.log(`user: ${this.name} has netflix subscription of ${this.ottsubscriptions.netflix}`)
        //this keyword refers to the object or execution context currently executing the piece of code
    }
}
console.log(user1.show())
console.log(user1.email)
console.log(user1["email"])
console.log(user1.ottsubscriptions.netflix)

console.log(Object.keys(user1));   
//Object.keys() is a built-in JavaScript tool that grabs all the property names (keys) from an object and puts them into a list (an array).
console.log(Object.values(user1));
//Object.values() does the exact opposite of Object.keys(). It grabs all the data (values) from an object and puts them into a list (an array).

//copying obj2 in obj1
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

//method-1
// const obj3 = Object.assign(obj1, obj2)
//console.log(obj1)

//method-2
// const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3)

// const obj3 = Object.assign(obj1, obj2)
// obj1.b = "garima"

// console.log("obj1", obj1)
// console.log("obj3", obj3)

//deep copy, shallow copy

//Object Destructuring (write like this)
//Object destructuring is a shortcut way to unpack properties from an object and quickly save them into individual variables.
// const {user, email, address} = user1
//(instead of this)
// const{user} = user1
// const{email} = user1

