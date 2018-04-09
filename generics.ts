console.log('FROM GENERICS')

//simple generic

function simpleGeneric(data:any){
    return data;
}
console.log(simpleGeneric('digitallync'));
console.log(simpleGeneric(34));
console.log(simpleGeneric({name:'digitallync',location:'gachibowli'}))

// better generic

function betterGeneric<T>(data: T){
    return data;
}
console.log(betterGeneric('digitallync'))
console.log(betterGeneric(23))
console.log(simpleGeneric({name:'digitallync',location:'gachibowli'}));

const results : Array<string>= ['fjhdsa'];

class BetterGenericClass<T extends number | string, U extends number| string>{
    valueone:T;
    valueTwo:U;
    calc(){
        return +this.valueone * +this.valueTwo;
    }
}
let betterclass = new BetterGenericClass();
betterclass.valueone = '10';
betterclass.valueTwo = '30';
console.log(betterclass.calc());
