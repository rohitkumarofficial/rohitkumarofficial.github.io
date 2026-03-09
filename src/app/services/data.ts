import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class Data {
  private dataUrl = environment.resumeDataUrl;
  private httpClient = inject(HttpClient);
  resumeDetails = signal<any>(null);
  constructor() {}

  getResumeDetails() {
    return this.httpClient
      .get(this.dataUrl)
      .pipe(
        tap((data) => {
          this.resumeDetails.set(data);
        }),
      );
  }

  getResumeFile() {
    return this.httpClient.get(environment.resumeUrl, { responseType: 'blob' });
  }
}
