import { Component, OnInit,Input } from '@angular/core';
import { semesterModel } from '../models/semesterModel';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() semesters: semesterModel[] ;
  //   // Populate this array with your semester data
  //   // Example data:
  //   { title: 'Spring 2023', semNo: 1, subjectCode: ['CSE101', 'MAT201'], subjectName: ['Computer Science', 'Mathematics'] ,img:'https://lh4.googleusercontent.com/9vB0i_Vinu1sg-jxSjEdeNYrmTdy1ebbzZzyvZlkYSHqCK50vvSdRr9cFpqrM8j_5NpkBM8CynRGljqg2tQLiMp-FK9LHOaXQ4G6hapeEIfqCZgTW5taP94JChECqWJeXQ=w1280'},
  //   { title: 'Spring 2024', semNo: 1, subjectCode: ['CSE102', 'MAT202'], subjectName: ['Computer Science2', 'Mathematics2'] ,img:'https://lh4.googleusercontent.com/9vB0i_Vinu1sg-jxSjEdeNYrmTdy1ebbzZzyvZlkYSHqCK50vvSdRr9cFpqrM8j_5NpkBM8CynRGljqg2tQLiMp-FK9LHOaXQ4G6hapeEIfqCZgTW5taP94JChECqWJeXQ=w1280'},
  //   // Add more semester objects as needed
  // ];
  constructor() { }

  ngOnInit() {
  }

}
