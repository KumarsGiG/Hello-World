import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  imports: [NgFor],
  standalone: true,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  courses : any[] = [];

  constructor(_coursesService: CoursesService) { 
    this.courses = _coursesService.GetAllCourses();
  }
}
