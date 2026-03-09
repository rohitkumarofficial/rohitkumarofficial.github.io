import { Component, computed, inject } from '@angular/core';
import { Header } from './header/header';
import { Data } from './services/data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProfileHeading } from './profile-heading/profile-heading';
import { MatCardModule } from '@angular/material/card';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Education } from './education/education';
@Component({
  selector: 'app-root',
  imports: [Header, ProfileHeading, MatCardModule, About, Experience, Education],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private dataService = inject(Data);
  isOpenToWork = computed(() => this.dataService.resumeDetails()?.openToWork);
  constructor() {
    this.dataService.getResumeDetails().pipe(takeUntilDestroyed()).subscribe();
  }
}
