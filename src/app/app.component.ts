import { Component, NgModule,OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	constructor(private router: Router ){

  	}
	ngOnInit(){
		/*Code to check if already logged in or not will go here
		For tesing by default it is navigating to login*/
		
		//if not logged in
			//this.router.navigate(['/login']);
		//else if logged in 

			//this.router.navigate(['/student']);
		
	}
}
