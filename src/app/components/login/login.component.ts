import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { RouterLink, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component(
{
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit 
{
  constructor(private router: Router) { }

  ngOnInit() 
  {
  
  
  }

  oncklick()
  {
    let email =  document.getElementById("email"); 
    let pwd = document.getElementById("password"); 
    if(email.value == "Finn" && pwd.value == "bacon1234")
    {
      console.log("if");
      this.router.navigate(['/form']); 
    }
    else
    {
      alert("Falsche Daten");   
    }

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