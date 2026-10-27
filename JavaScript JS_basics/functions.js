// function verfifyPayment(transactionID){
//     if(transactionID===undefined){
//         console.log("payment failed!!")
//         return;
//     }
//     console.log("transactionId: ", transactionID)
//     console.log("Payment is Succesfull")
// }
// verfifyPayment()

// function addExpenses(exp1, exp2){
//     return exp1+ exp2;
// }
// const total = addExpenses(20, "23")
// console.log("total", total)

//parameters and arguments.
// == and ===

// const user1= {
//     name: "user1",
//     email: "user@gmail.com",
//     address: "Mathura",
//     ottSubscriptions: {
//         netflix: "basic",
//         amazonPrime: "premium"
//     },
//     show: ()=>{
//         console.log(`user: ${this.name} has netflix subscription of ${this.ottSubscriptions?.netflix}`)
//     }
// }

// const user1 = {
//     name: "user1",
//     email: "user@gmail.com",
//     address: "Mathura",
//     ottSubscriptions: {
//         netflix: "basic",
//         amazonPrime: "premium"
//     },
//     // Fix: Remove the => and make it a standard method shorthand
//     show: ()=> {
//         console.log(`user: ${this.name} has netflix subscription of ${this.ottSubscriptions?.netflix}`);
//     }
// }

// user1.show(); 
// Output: user: user1 has netflix subscription of basic


//CallBack function  -  a function passed into another function as an argument, which is then executed (or "called back") inside that outer function to complete a task.

function calc(num1, num2, callback){
    console.log(num1, num2, callback)
    return callback(num1, num2);
}

    function add(num1, num2){
        return num1+num2;
    }


console.log(calc(2,4,add));

//map method
const numbers = [1, 2, 3, 4, 5]
// const doubleOfNumbers = numbers.map(function func(){})
//same thing can be also written like this using arrow funtion
const doubleOfNumbers = numbers.map((nums) => nums*2)
console.log(doubleOfNumbers)

//filters method
const addNumbers = numbers.filter((nums) => nums % 2 != 0)

//reduce method
const sumOfNumbers = numbers.reduce((acc, num) => acc+num,0)
console.log(sumOfNumbers)

//to change things in existing array or database use forEach() . map() will return new array.

//Question - use all methods we were taught
const products =  [
    { name: "Milk", price: 30, quantity: 2 },
    { name: "Bread", price: 40, quantity: 1 },
    { name: "Eggs", price: 90, quantity: 2 },
    { name: "Rice", price: 250, quantity: 1 }
];

//solution
