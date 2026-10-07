import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-simca',
  standalone: true,
  imports: [CommonModule, FormsModule, PrincipalComponent],
  templateUrl: './simca.component.html',
  styleUrls: ['./simca.component.css']
})
export class SimcaComponent {
  username = '';
  password = '';
  isAuthenticated = false;

  onLogin(): void {
    if (this.username.trim() && this.password) {
      this.isAuthenticated = true;
    }
  }

  onLogout(): void {
    this.isAuthenticated = false;
    this.username = '';
    this.password = '';
  }
}
