import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  GetAllCourses() {
    return [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Vue' },
      { id: 4, name: 'Node.js' },
      { id: 5, name: 'Django' }
    ];
  }
}
