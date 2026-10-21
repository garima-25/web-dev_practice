const arr = [10, 20, "Garima", true]

arr.push("Hello")                    //The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
arr.unshift(false)                  // The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

const arr1 = arr.slice(1,3)        //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(arr1)
console.log("arr:", arr)

const arr2 = arr.splice(1,3)     //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(arr2)
// console.log(arr)
// console.log(typeof arr)
// console.log(typeof null)