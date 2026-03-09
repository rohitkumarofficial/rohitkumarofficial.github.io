import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../services/data';

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private dataService = inject(Data);
  skills = computed(
    () =>
      this.dataService.resumeDetails()?.skills?.map((group: { items: any; }) => ({
        ...group,
        items: [...group.items].sort((a, b) => a.localeCompare(b)),
      })) || [],
  );
}
