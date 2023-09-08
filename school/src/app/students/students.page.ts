import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { StudentsListService } from 'src/app/services/students-list.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../interface/student';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule,
    CommonModule,
    FormsModule,
    RouterModule]
})
export class StudentsPage implements OnInit {

  studentsData: Student[] = [];

  constructor(private route: Router, private studentsListService: StudentsListService) {
  }

  ngOnInit() {
    this.studentsListService.getPersonas().subscribe((data: Student[]) => {
      this.studentsData = data;
    });
  }

  back(): void {
    this.route.navigateByUrl('menu')
  }


}
