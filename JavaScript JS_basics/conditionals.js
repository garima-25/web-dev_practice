let age = 16
if(age < 16){
    console.log('cannot vote')
}else{
    console.log('can vote')
}

//leap year

let year = 2024
if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("leap year")
}else{
    console.log("not a leap year")
}
