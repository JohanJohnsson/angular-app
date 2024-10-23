import { Component, inject } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: User = new User('', '', '');

  private userService = inject(UserService);
  private router = inject(Router);

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe({
      next: (createdUser) => {
        console.log('User created: ', createdUser);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error creating user:', err);
      },
    });
  }
}
