import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Input() logoPath: string = './assets/img/logo.jpg';
  @Input() clubName: string = 'ECE EDUCATIONAL CLUB';
  @Input() subNavItems: { label: string, id: Number }[] = [{label:"Semester I",id:1},{label:"Semester II",id:2},{label:"Semester III",id:3}];

  ngOnInit() {
  }

}
