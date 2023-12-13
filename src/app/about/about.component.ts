import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotificationsComponent } from '../notifications/notifications.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public dialog:MatDialog,private modalService: BsModalService) { }

  ngOnInit() {
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(NotificationsComponent, {
      
    //   data: {code:'2020', msg:'error.msg'}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
      
    // });

    this.modalService.show(LoginFormComponent);
  }

}
