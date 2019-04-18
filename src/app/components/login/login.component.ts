import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { RouterLink, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from 'src/app/services/data.service';

@Component(
{
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit 
{
  login: FormGroup; 
  constructor(private router: Router , private fb: FormBuilder, public rest:DataService) { }

  ngOnInit() 
  {
    this.login = this.fb.group(
      {
        email: '', 
        password: ''  
      }); 

  }

  oncklick()
  {
    let  credentials = this.login.getRawValue();  
    if(credentials.email == "finnziehe@mailbox.org" && credentials.password == "bacon1234" )
    {
      this.router.navigate(['/menue']); 
      this.setloggin(true);
    }
    else
    {
      alert("Falsche Daten");
    }
  }

  setloggin(setloggin)
  { 
    this.rest.setloggin(setloggin); 
  }
}





/*
export class RegisterForm
{
  registerUser(form: NgForm)
  {
    console.log(form.value); 
   // {email: '...', password: '...'}

  }

}*/