//for loop

// for(let i=0; i<10; i++){
//     console.log(i)
// }

//while loop

// let i = 1;
// while(i<5){
//     console.log(i)
//     i++;
// }

//do-while

// let i = 6
// do{
//     console.log(i)
//     i++
// }while(i<5)

//for of

// let arr = [2, 3, 5, 5, 1, 9]
// for(let x of arr){
//     console.log(x)
// }

//for in

let obj = {
    name: 'Raj',
    age: 55,
    gender: 'Male',
    college: 'GLA'
}

for(let x in obj){
    console.log(obj[x])
}

//For each 

//prime no.
let val = 1
let flag = 0;

if(val<2){
    console.log('not prime')
}
for(let i=2; i<val/2;i++){
    if(val%i == 0){
        flag = 1
        break
    }
}
if(flag == 0){
    console.log('prime')
}else{
    console.log('not prime')
}