import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user: any = {
    email: "",
    password: ""
  }

  onSubmit(userData: any) {
    this.user = userData;
    console.log("form submitted!", this.user);
  }
}
