import { Routes } from '@angular/router';
import { ViewallComponent } from './User/viewall/viewall.component';
import { AddComponent } from './User/add/add.component';

export const routes: Routes = [

    { path: '', component: ViewallComponent },
    { path: 'students', component: ViewallComponent },
    { path: 'addStudents', component: AddComponent },
];
