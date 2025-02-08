import { Component } from '@angular/core';
import { error } from 'console';
import { RestService } from './rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  EmployeeForm! : FormGroup;
  Employee: any;
 
  constructor(private rest:RestService,private fb:FormBuilder){
    
    this.EmployeeForm=this.fb.group({
       id : [''],
       name : [''],
       dept : [''],
       designation : ['']
    
    })
  }
  bDisplayAddOrEditForm =false;
  strAddOrEditDisplayTitle='';
  addEmployeeRecord(){
    this.bDisplayAddOrEditForm=true;
    
    this.strAddOrEditDisplayTitle="Add Record"
  }
  AddOrEditEmployeeRecord(){
    let id=this.EmployeeForm.get('id')?.value;
    let name=this.EmployeeForm.get('name')?.value;
    let dept=this.EmployeeForm.get('dept')?.value;
    let designation=this.EmployeeForm.get('designation')?.value;

  console.log('Id' +id);
  console.log('name' +name);

  console.log('dept' +dept);

  console.log('designation' +designation);

  let empObj= new Employee(id,name,dept,designation);
  if(this.strAddOrEditDisplayTitle=="Add Record"){
  this.rest.insertEmployeeRecord(empObj).subscribe({
    next : (data) =>{
      alert('Record Inserted Successfully');
      this.getAllEmployees()
    },
    error:(err) => alert(err),
    complete : () =>console.log('Insert operation is successful')
  });
  }
  else if(this.strAddOrEditDisplayTitle=="Edit Record"){
    this.rest.updateEmployeeFromRestService(empObj).subscribe({
      next : (data) =>{
        alert('Record Updated Successfully');
        this.getAllEmployees()
      },
      error:(err) => alert(err),
      complete : () =>console.log('Edit operation is successful')
    });

  }
  //deleteEmployeeFromRestService
 

  }
  
  title = 'angForms';
  empLst:any;
  hbutton=false;
  getAllEmployees(){
    this.hbutton=true;
    this.rest.getAllEmployeesFromService().subscribe({
    next :(data:any) =>{this.empLst = data.sort((a: any, b: any) => a.id - b.id);},

    error:(err)  => alert(err),
    complete:()=> console.log("Fetching data from server is completed")
    })
    
  }
  OnEditEmployeeRecord(emp: Employee){
    this.bDisplayAddOrEditForm=true;
    this.strAddOrEditDisplayTitle="Edit Record";
    this.EmployeeForm.patchValue({
      id: emp.id,
      name:emp.name,
      dept: emp.dept,
      designation:emp.designation

    })
    
  }
  OnDelectEmployeeRecord(id:number){
    this.rest.deleteEmployeeFromRestService(id).subscribe({
      next :(data:JSON) =>{alert("recodr deleted...")
           this.getAllEmployees(),
           
           console.log(JSON.stringify(data))
                   
      },
     error:(err)  => alert(JSON.stringify(err)),
     complete:()=> console.log("Fetching data from server is completed")
    })
    
  }
  

}

