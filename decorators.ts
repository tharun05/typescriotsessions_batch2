console.log('from decorators')

function logged(constructorFun:Function){
    console.log(constructorFun)
}

@logged
class Detailedperson{
    constructor(){
        console.log('hello')
    }
}

let detailedperson = new Detailedperson();
console.log(detailedperson)

// factory

function logwhentrue(value:boolean){
    return value ? logged : null;
}

@logwhentrue(false)
class Destination{
    
}



