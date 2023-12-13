import { Component, OnInit,Input } from '@angular/core';
import { semesterModel } from '../models/semesterModel';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() semesters: semesterModel[] ;
 
  constructor() { }

  ngOnInit() {
  }

}
