import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

   username: string = '';
  password: string = '';
  message: string = '';

  onSubmit() {
    if (this.username && this.password) {
      this.message = `Login successful for ${this.username}`;
    } else {
      this.message = 'Please enter both username and password';
    }
  }

}
