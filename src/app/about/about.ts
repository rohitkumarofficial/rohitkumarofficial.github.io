import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Data } from '../services/data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private dataService = inject(Data);
  profile = computed(() => this.dataService.resumeDetails());
}
