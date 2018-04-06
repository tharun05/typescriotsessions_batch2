// let $ const

console.log("let and const");

let variable = "digitallync";
console.log(variable)
variable = "anathor value";

console.log(variable);

const adharNumber = 123456789012;

// adharNumber = 50;

// block scope

function set(){
    let variable = null;
    console.log(variable)
}
set();
console.log(variable)

// arrow functions

console.log('arrow functions starts here');

const addNumbers = function(num1:number,num2:number){
    return num1+num2;
}
console.log(addNumbers(2,5));

const addTwoNumbers = (num1:number,num2:number):number=>{
    return num1+num2
}

const multiplynumbers = (num1:number,num2:number):number=> num1 *num2;


const countNumbers = (start:number = 10):void=>{
    console.log('start')
    while(start>0){
      console.log(start--);  
    }
    console.log("done with the count");
}
countNumbers();

// rest and spread operators
const numbers = [1,2,3,4,101,999];

console.log(Math.max(...numbers))

function makearray(name:string,...args:number[]){
    return args;
}
console.log(makearray('tharun',1,2,3,4))
console.log('Destructuring');
const game = ['cricket','volly ball'];

const [gameone,gametwo] = game;

console.log(gameone,gametwo);


const userData = {userName:"adam", ageone:34};

const {userName,ageone} = userData
console.log(userName,ageone);


