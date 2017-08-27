import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedtype: number=1;

  constructor(private router:Router) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    })
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
