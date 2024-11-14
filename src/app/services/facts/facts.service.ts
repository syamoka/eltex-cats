import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Fact, FactDetails } from './fact-model';
import { environment } from '../../../environments/environment.development';
import { CatsService } from '../cats/cats.service';
@Injectable({
  providedIn: 'root',
})
export class FactsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly catsService: CatsService = inject(CatsService);

  getFactsWithRandomCatImages(): Observable<any[]> {
    return this.http.get<Fact[]>(`${environment.API_URL}facts`).pipe(
      switchMap((facts) => {
        const requests = facts.map((fact) =>
          this.catsService.getRandomCatImage({ position: 'center' }).pipe(
            catchError(() => of(null)),
            map((imagePath) => ({
              ...fact,
              imagePath,
            }))
          )
        );
        return forkJoin(requests);
      })
    );
  }
  getById(id: string): Observable<FactDetails> {
    return this.http.get<FactDetails>(`${environment.API_URL}facts/${id}`);
  }
}
