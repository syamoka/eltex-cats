import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CatParams } from './cat-params';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  private readonly http: HttpClient = inject(HttpClient);
  getRandomCatImage(params?: CatParams) {
    return this.http
      .get(`${environment.CATS_URL}cat`, {
        params,
        responseType: 'blob',
      })
      .pipe(map((x) => window.URL.createObjectURL(x)));
  }
}
