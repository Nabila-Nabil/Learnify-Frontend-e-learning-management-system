import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import {CourseContentsComponent} from '../course-contents/course-contents.component'


@Component({
  selector: 'app-course-enrollement',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CourseContentsComponent],
  templateUrl: './course-enrollement.component.html',
  styleUrl: './course-enrollement.component.css'
})
export class CourseEnrollementComponent {

  constructor() { }
  
}
