import { Component, computed, inject } from '@angular/core';
import { Data } from '../services/data';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private dataService = inject(Data);
  experiences = computed(() => this.dataService.resumeDetails()?.experiences || []);
}
