import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curses } from '../interface/curses';
import { CursesListService } from '../services/curses-list.service';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.page.html',
  styleUrls: ['./curses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class CursesPage implements OnInit {

  cursesData: Curses[] = [];

  constructor(private route: Router, private cursesListService: CursesListService) { }

  ngOnInit() {
    this.cursesListService.getCursos().subscribe((data: Curses[]) => {
      this.cursesData = data;
    });
  }

  back(): void {
    this.route.navigateByUrl('menu');
  }

}
