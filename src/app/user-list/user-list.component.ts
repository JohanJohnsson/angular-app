import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = true;
  error: string | null = null;

  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        console.log('Fetched users:', data);
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  fetchUsers(): void {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = 'Failed to load users. Please try again later.';
        this.loading = false;
      },
    });
  }
}
