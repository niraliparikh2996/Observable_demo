import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    id: 1,
    name: 'Nirali',
    enrollmentnumber: 16084211004,
    college: 'AMPICS ',
    university: 'Ganpat University'
},
{
    id: 2,
    name: 'Dhruvi',
    enrollmentnumber: 16084211005,
    college: 'UVPCE',
    university: 'Ganpat University'
},
{
    id: 3,
    name: 'Parth',
    enrollmentnumber: 16084211009,
    college: 'DCS',
    university: 'Ganpat University'
}];
  constructor() { }


  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return studentsObservable;

  }
}
