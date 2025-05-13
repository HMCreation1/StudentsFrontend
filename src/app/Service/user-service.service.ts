import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  
  // private baseUrl = 'http://localhost:8080/api'; // Localhost URL for testing            
  private baseUrl = 'https://comfortable-flexibility-production.up.railway.app';  // Railway URL for production
  

  constructor(private http: HttpClient) { }
  getAllStudents() {
    return this.http.get(this.baseUrl+"/students");
  }
  addStudent(student:any) {
    return this.http.post(this.baseUrl+"/addstudent", student);
  }
  deleteStudent(id: any) {
    return this.http.delete(this.baseUrl+`/delete/${id}`);
  }
}
