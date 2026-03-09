import { Component, computed, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Data } from '../services/data';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {},
})
export class Header {
  private dataService = inject(Data);
  isOpenToWork = computed(() => this.dataService.resumeDetails().openToWork);
}
