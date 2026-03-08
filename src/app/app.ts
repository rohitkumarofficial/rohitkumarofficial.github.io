import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Data } from './services/data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
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
