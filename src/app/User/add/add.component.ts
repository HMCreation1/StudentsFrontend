import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../Service/user-service.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [FormsModule,RouterLink, NgIf,ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private service: UserServiceService) { }

  student = {
    rollNo: null,
    name: '',
    age: null,
    gender:'',
    stdClass: ''
  };
  onSubmit(form: NgForm) {
    // console.log(this.student);
    this.service.addStudent(this.student).subscribe(
      (response: any) => {
      // console.log('Student added successfully', response);
      alert('Student added successfully');
      this.student = { rollNo: null, name: '',age: null, gender: '', stdClass: '' };
    },
     (error: any) => {
      alert('Error adding student');
      // console.error('Error adding student', error);
    }
    
    );
  }
    

}
