import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../services/data';
@Component({
  selector: 'app-profile-heading',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './profile-heading.html',
  styleUrl: './profile-heading.scss',
})
export class ProfileHeading {
  private dataService = inject(Data);
  profile = computed(() => this.dataService.resumeDetails()?.personal);
  
  link(type: 'linkedin' | 'github'): void {
    const url = this.profile()?.[type];
    if (url) {
      window.open(url, '_blank');
    }
  }
}
