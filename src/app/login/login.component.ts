import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedtype: number = 1;

  constructor(private router:Router) { }

  ngOnInit() {
      $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: 0, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '12%', // Ending top style attribute
			ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
			
				console.log(modal, trigger);
			},
		});
      });
     
    
  
  }

  onSubmit(){
    if(this.selectedtype==1){
      this.router.navigate(['/student']);
    }
    else if(this.selectedtype==2){
      this.router.navigate(['/teacher']);
    }
    else if(this.selectedtype==3){
      this.router.navigate(['/parent']);
    }
    else if(this.selectedtype==4){
      this.router.navigate(['/admin']);
    } 
    else{
      this.router.navigate(['/pagenotfound']);
    }
   
  }
}
