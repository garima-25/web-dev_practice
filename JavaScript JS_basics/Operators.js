//1.Arithmetic Operators

// let a = 20
// let b = 10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

//2.Assignment Operators

// let a = 10;
// a += 5;
// a *= 2;
// console.log(a);

//3.Comparison Operators

// let a = 20
// let b = 10
//  console.log(a>b)
//  console.log(a<b)
//  console.log(a==b)
//  console.log(a===b)
//  console.log(a>=b)
//  console.log(a!==b)

//4.Logical Operators

// const a = true, b = false;
// console.log(a && b); // Logical AND
// console.log(a || b); // Logical OR

//5.Bitwise Operators

// const res = 5 & 1; // Bitwise AND
// console.log(res);

// & performs AND operation on each bit.
// | performs OR operation on each bit.
// ^ performs XOR (exclusive OR) on each bit.
// ~ inverts all bits (NOT operator).
// << shifts bits to the left.
// >> shifts bits to the right (with sign).
// >>> shifts bits to the right (without sign).

//6.Ternary Operators

// let z = 10;
// let y = 20;
// let c = (z>y) ? "z is greater" : "y is greater"

//7.Null Coalsing Operators

// let x = 34    // if x is undefined like x=null then output will be right side value otherwise when x is defined it will print x value
// console.log(x ?? "right side value")

//8.Spread Operator   ...     (expand arrays element and convert it into individual items)

// let arr1 = [3, 5, 6, 1, 8]     // create array in js
// console.log(arr1)
// console.log(...arr1)

// let arr2 = arr1       // wrong way to copy and modify array beacuse it will change original array also
// arr2[0] = 100
// console.log("arr2 => " ,arr2)
// console.log("arr1 => " ,arr1)

// let arr2 = [...arr1] //correct way
// arr2[0] = 100
// console.log("arr2 => " ,arr2)
// console.log("arr1 => " ,arr1)

//9.Rest Operator ... (it shrink multiple element into a single array opposite of spread operator)
// function add(...num){  
//     let sum =  0;
//     for(let i=0; i<num.length; i++){
//         sum += num[i]
//     }
//     return sum
// }
// console.log(add(3, 4, 7, 2, 1))    //we write output part in console.log so that it could print it

// let obj = {      //same thing using object
//     name : "Garima",
//     age : 21,
//     address : {
//         city : "New Delhi",
//         state : "Delhi",
//         pin : 110041
//     }
// }
// console.log(obj['name'])
// console.log(obj['age'])
// console.log(obj['address'])

// let obj2 = {...obj}    //shallow copy just copy one level element not nested level
// obj2.name = "Sumit"
// console.log(obj2.name)
// obj2.address.city = "Mumbai"
// console.log(obj.address.city)  // answer will be mumbai beacuse of shallow copy

// let obj2 = structuredClone(obj)   //deep copy
// obj2.address.city = "Mumbai"
// console.log(obj.address.city) 

// Math object

// let pi = Math.PI
// console.log(pi)

// console.log(Math.round(4.3))
// console.log(Math.round(4.7))
// console.log(Math.round(4.5))

// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.5))

// console.log(Math.min(3, 4, 6, 1))
// console.log(Math.max(3, 4, 6, 1))

// console.log(Math.sqrt(4))
// console.log(Math.cbrt(27))

// console.log(Math.floor(Math.random()*100)+1)

//10 uniary operator
// let x = 10
// x++ //post increment
// console.log(x++)
// ++x //pre increment
// console.log(--x)
// x-- //post decrement
// --x //pre decrement

// console.log(x)

//optional chaining operator  ?.
// let obj = {
//     name: 'Amol',
//     age: 12,
    // address: {
    //     city: 'New Delhi',
    //     state: 'Delhi'
    // }
// }
// console.log(obj.address?.pin)