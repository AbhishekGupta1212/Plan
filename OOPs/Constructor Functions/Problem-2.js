function AnimalCF(noOfLegs,vegetarian){
    noOfLegs;
    vegetarian

    this.eat=function(){
        return 'eating'
    }
    this.greet=function(){
        return `Hi I have ${noOfLegs} legs`
    }
}

let lion=new AnimalCF(8,false)
console.log(lion.greet())