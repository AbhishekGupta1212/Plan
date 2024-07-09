class AnimalES6{
    constructor(noOfLegs,vegetarian){
        this.noOfLegs=noOfLegs;
        this.vegetarian=vegetarian;
    }
    eat(){
        return 'Eating'
    }

    greet(){
        return `I Have ${this.noOfLegs} legs`
    }
}

let lion =new AnimalES6(4,false)
console.log(lion.greet())