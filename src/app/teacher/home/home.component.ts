import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit() {
  }
  timetableclk(){
      this.router.navigate(['/teacher/timetable']);
  }
  attendanceclk(){
      this.router.navigate(['/teacher/attendance']);

  }
  /*More Tabs can be added as required*/
}
