import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule, 
    FormsModule]
})
export class MenuPage implements OnInit {

  @Output() NavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  Nav(): void{
    this.NavEvent.emit(false);
  }

  NavCurses(): void{
    this.NavEvent.emit(true);
  }

  NavStudents(): void{
    this.NavEvent.emit(true)
  } 
}
