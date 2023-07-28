import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Employee } from '../appModels/employee.madel';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  constructor(private http:HttpClient) { }
  saveDataInDB(emp:Employee){
    this.http.post('http://localhost:3000/home',emp).subscribe(res=>{
      console.log(res);
    })
  }
}
