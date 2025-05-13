import { Component } from '@angular/core';
import { UserServiceService } from '../../Service/user-service.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewall',
  imports: [NgFor,RouterLink],
  templateUrl: './viewall.component.html',
  styleUrl: './viewall.component.css'
})
export class ViewallComponent {
  
  constructor(private service: UserServiceService) { }

  Students: any ;
  ngOnInit(): void {
    //get all students from the backend 
    this.service.getAllStudents().subscribe((data: any) => {
      this.Students = data;
      // console.log(this.Students);
    });
  }
    deleteStudent(id: Number): void {
        this.service.deleteStudent(id).subscribe(
          (response: any) => {
            // console.log('Student deleted successfully', response);
            // Refresh the list of students after deletion
            alert(response.message);
            this.ngOnInit();
          },
          (error: any) => {
            // console.error('Error deleting student', error);
            alert('Failed to delete student. Please try again later.');
          }
        )
    }
    
    
    
  

}
