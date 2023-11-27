import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SemestersServiceService } from '../services/semesters-service.service';
import { MatDialog } from '@angular/material';
import { NotificationsComponent } from '../notifications/notifications.component';
import { semesterModel } from '../models/semesterModel';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  semesterNumber: number;
  semarray :semesterModel[];
  constructor(private route: ActivatedRoute,private semService:SemestersServiceService,private dialog:MatDialog) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Extract the semester number from the route parameters
      this.semesterNumber = +params['id'];
      this.fetchSemesters();
    });
    this.route.params.subscribe(params => {
      // Extract the semester number from the route parameters
      const newsemesterNumber = +params['id'];
      if(newsemesterNumber!=this.semesterNumber)
      {
        this.semesterNumber=newsemesterNumber;
        this.fetchSemesters();
      }
      
    });
    


  }

  

  fetchSemesters()
  {
    this.semService.getSemesters(this.semesterNumber).subscribe(
      (semesters: semesterModel[]) => {
        this.semarray = semesters;
        console.log(this.semarray); // Log the result to see if it's correct
      },
      (error) => {
        this.dialog.open(NotificationsComponent,{
          
          data: error.message
        })
      }
     )
  }

}
