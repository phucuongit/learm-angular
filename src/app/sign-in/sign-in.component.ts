import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email = ''
  password = ''
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.email, this.password)
  }
}
