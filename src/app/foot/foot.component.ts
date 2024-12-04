import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent {
  username = '';
  password = '';
  constructor(private router: Router,private authService: AuthService) {}
  login() {
    // Basic authentication (replace with secure authentication)
    if (this.username === 'admin' && this.password === 'admin123') {
      // Navigate to the dashboard on successful login
      // You may want to use Angular Router for navigation
      alert('Login successful');
      this.authService.isLoggedIn = true;
      this.router.navigate(['/list']);
    } else {
      alert('Login failed');
    }
  }

}
