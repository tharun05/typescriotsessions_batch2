interface NamedPerson{
    firstname:string;
    greet(lastname:string):void;
    age?:number;
    [propName:string]:any;
}

function greet(person:NamedPerson){
    console.log(person.firstname)
}
function changeName(person:NamedPerson){
    person.firstname = "digital"
}

const personlist : NamedPerson = {
    firstname:'tharun',
    hobbies:['cooking','sports'],
    greet(){
        console.log(this.firstname)
    }
}

class Personone implements NamedPerson{
    firstname:string;
    lastname:string = "joel";
    greet(lastname:string){
        console.log(this.firstname+' '+this.lastname);
    }
}

const myPerson = new Personone();
myPerson.firstname = "samuel"
myPerson.greet(myPerson.lastname);
console.log(myPerson)

interface DoubleValFunc{
    (number1:number,number2:number):number
}

let myDoubleFunction:DoubleValFunc;

myDoubleFunction = function(value1:number,value2:number){
    return (value1+value2)*2
}
console.log(myDoubleFunction(10,20))

interface person2 extends NamedPerson{
    age:number;
}

const oldPerson:person2 = {
    age:27,
    firstname:'maya',
    greet(){
        console.log(this.firstname);
    }
}
console.log(oldPerson);