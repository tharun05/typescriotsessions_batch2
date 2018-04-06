// string 

let firstname:string = 'flkahsfkjashf;laskdfh';

let age:number = 24;


let hasHobbies:boolean = true;


let games: any = 'soccor';

games = 10;

let players:any[] = ['sachin','sania',10];

let address:[string,string,number] = ['gachibowli',"street no", 10];


enum fest{
    Diwali,
    ramadan = 12,
    bhogi
}


var festival: fest = fest.bhogi;

console.log(festival);
let isActive:boolean = true;

let obj:{name:string,age:number} = {
    name:'digitallync',
    age:23,
}

function returnName():number{
    return 3*4
}

console.log(returnName());


var printName = (num1:number,num2:number)=>{
    return num1*num2;
}

console.log(printName(3,4));

// complex objects

type myObjType = {data:number[] ,output:(all:boolean)=>number[]};

let complexObj: myObjType= {
    data:[200,300,400],
    output:function(all:boolean):number[]{
        return this.data
    }
}
console.log(complexObj)