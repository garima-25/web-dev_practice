//Asynchronous code in JavaScript allows the engine to start long-running tasks and move on to other code immediately, rather than freezing the application while waiting.Task goes to queues
//setTimeOut line prints later beacuse it is asynchronous and it don't directly executes it 
// console.log("I am task1")

// console.log("I am task2")

//setTimeout is a built-in JavaScript function that executes a specific piece of code after a designated waiting period (in milliseconds).
// setTimeout(()=>console.log("I am called after 2 seconds"),2000)   //its asynchronous

// console.log("I am task3")

//A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation.
//priority of promise is more than setTimeOut

// Promise.resolve().then(()=>console.log("promise resolved"))

//settimeout
// setTimeout(()=>{
// },1000)

// const intervalId = setInterval(()=>{
//     console.log("I am executing after every 2 seconds")
// },2000)

// setTimeout(()=>{
//     clearInterval(intervalId)
// },4000)



/* order is placed  //first
 "you can browse other item while the order is confirming"
 order is confirmed  //after 3 seconds */

// console.log("Order is placed.");
// console.log("You can browse other items while the order is confirming");
// setTimeout(() => console.log("Order is confirmed!"), 3000);


// function orderPlaced(nextStep) {
//   console.log("Order placed");
  
//   setTimeout(() => {
//     nextStep(orderConfirmed);
//   }, 1000);
// }

// function makePayment(nextStep) {
//   console.log("Payment processed");
  
//   setTimeout(() => {
//     nextStep();
//   }, 1000);
// }

// function orderConfirmed() {
//   return new Promise((resolve) => {
//     console.log("Order Confirmed");
//     resolve("Success! Delivery coming soon.");
//   });
// }

// orderPlaced((callback) => {
  
//   makePayment((finalItem) => {
    
//     orderConfirmed(finalItem).then((message) => {
//       console.log(message);
//     });
    
//   });
  
// });


//microtask queue

//promise
/* const promiseOne = new Promise(function(resolve, reject) {
    // DB calls, file read and write
    let error = true;

    if (error) {
        console.log("Async task is failed");
        reject();
    }
    else {
        setTimeout(() => {
            console.log("Async task is completed");
            resolve();
        }, 2000);
    }
}); */

/*
promiseOne.then(function() {
    console.log("promise is resolved");
})
.catch(function() {
    console.log("promise is rejected");
})
.finally(function() {
    console.log("promise is either accepted or rejected");
});
*/

const promiseTwo = new Promise(function(resolve, reject) {
    let data = null;
    // let data = { userName: "abc", password: "1234" };

    setTimeout(() => {

        if (data) {
            console.log("Data is fetched successfully");
            resolve({ data });
        }
        else {
            console.log("Promise failed");
            reject("Error: Something went wrong");
        }

    }, 2000);
});

promiseTwo
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });


//async await
async function consumerPromiseTwo() {
  try{
    const response = await promiseTwo()
    console.log(response)
  }
  
  catch (error){
      console.log(error)
  }
}

consumerPromiseTwo()
const FetchUser = async()=>{
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("response from api endpoint", response);
    console.log("data from api", data);
  }
  catch(error){
    console.log(error);
  }
  
};
FetchUser();
