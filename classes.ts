class Person{
    public name:string;
    private designation:string;
    protected age:number =19;
    constructor(name:string, designation:string){
        this.name = name;
        this.designation = designation;
    }
    printAge(){
        console.log(this.age)
    }
    setDesignation(designation:string){
        this.designation = designation;
        console.log(this.designation)
    }

}
// let person = new Person('jkhfasd','jfalsjkf');
// person.printAge();
// person.setDesignation("developer");


class Employee extends Person{
    name = "microsoft";
    constructor(){
        super('tharun',"dillikar");
    }
}
let employee = new Employee();
console.log(employee)

// console.log(employee.)

// class Vehicle{
//     private type:string = "bmw vehicle";
//     getVehicles(){
//         return this.type;
//     }
//     vehicless(value:string){
//         if(value.length>4){
//             this.type = value;
//         }else{
//             this.type = 'bmw vehicle'
//         }
//     }
//     constructor(){

//     }
// }

// let vehicle = new Vehicle();
// vehicle.Vehicles()
// console.log(vehicle.vehicless('audilkfhasdlkfh'))

// abstract classes

abstract class Project{
    projectName:String = "Shopping Cart";
    budget:number = 10000;
    abstract changeProjectName(name:string):void;
}
class ITProject extends Project{
    static projectPeriod:string = '6months'
    changeProjectName(name:string):void{
        this.projectName = name;
        console.log(this.projectName)
    }
    static companyLocation():void{
        console.log('gachibowli')
    }
}

let newProject = new ITProject();
newProject.changeProjectName('product sales project');
ITProject.companyLocation();