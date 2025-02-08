export class Employee{
    id! : number;
    name! : string;
    dept! : string;
    designation! : string;

    constructor(id:number,name:string,dept:string,designation:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
        this.designation=designation;
    }
}