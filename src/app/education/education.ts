import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../services/data';

@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  private dataService = inject(Data);
  education = computed(() => this.dataService.resumeDetails()?.education || []);
}
