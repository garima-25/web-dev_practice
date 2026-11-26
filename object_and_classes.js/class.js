class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(this.name)
    }
}

class User extends Person{
    constructor(name,age){
        super(name,age)
    }
}

const user extends Person{
    constructor(name,age){

    }
}


class BankAccount{
    #balance;

    constructor(startingAmount, accountHolder){
        this.accountHolder=accountHolder;
        this.#balance=startingAmount;
    }
}