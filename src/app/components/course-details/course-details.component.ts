import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from '../../services/account/CourseDetails/course-details.service';
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courseId:any =-1
  courseName: string = '';
  constructor(private route: ActivatedRoute ,private courseService: CourseDetailsService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
    
      this.courseId = params['id'];
      this.fetchCourseDetails();
    });
  }
  fetchCourseDetails() {
    this.courseService.getCourseName(this.courseId).subscribe(
      (response: any) => {
        this.courseName = response.name;
      },
      (error: any) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
}


