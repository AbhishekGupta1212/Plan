function animal(noOfLegs,vegetarian){
let obj={}
obj.noOfLegs=noOfLegs;
obj.vegetarian=vegetarian;

obj.eat=function(){
    return "eating"
}
obj.greet=function (){
return `Hi I have ${this.noOfLegs} legs`
}
return obj
}

let lion=animal(4,false);
console.log(lion.greet())