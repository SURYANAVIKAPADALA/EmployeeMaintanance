import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  strUrl="http://localhost:3000/Employee";
  getAllEmployeesFromService():Observable<any>{
    return this.http.get(this.strUrl)
  }
  insertEmployeeRecord(empObj:Employee):Observable<any>{
    const headers ={'content-type': 'application/json'};
    const empRec = JSON.stringify(empObj);
    return this.http.post(this.strUrl,empRec,{'headers':headers})
  }
  updateEmployeeFromRestService(empObj:Employee):Observable<any>{
    
    const empRec = JSON.stringify(empObj);
    let updateStrUrl=this.strUrl+'/'+empObj.id;
    return this.http.put(updateStrUrl,empRec)
  }
  deleteEmployeeFromRestService(id:number):Observable<any>{
    
    
    let deleteStrUrl=this.strUrl+'/'+id;
    return this.http.delete(deleteStrUrl)
  }
}
