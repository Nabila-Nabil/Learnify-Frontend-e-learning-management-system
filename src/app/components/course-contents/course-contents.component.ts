import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import {ContentService} from '../../services/content/content.service'

@Component({
  selector: 'app-course-contents',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './course-contents.component.html',
  styleUrl: './course-contents.component.css'
})
export class CourseContentsComponent {
  courseId:any =-1;
  courseContent:any={};
  constructor(private route: ActivatedRoute,private contentService:ContentService
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.fetchCourseDetails(this.courseId)
    });


  }

  fetchCourseDetails(id:number) {
    this.contentService.getContentByCourseId(id).subscribe(
      (response: any) => {
        this. courseContent=response;
        console.log(response);
      },
      (error: any) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
}
