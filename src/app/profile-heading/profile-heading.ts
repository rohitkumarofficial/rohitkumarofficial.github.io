import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-profile-heading',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './profile-heading.html',
  styleUrl: './profile-heading.scss',
})
export class ProfileHeading {

}
