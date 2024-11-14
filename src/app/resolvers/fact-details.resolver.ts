import { ResolveFn, Router } from '@angular/router';
import { FactsService } from '../services/facts/facts.service';
import { inject } from '@angular/core';
import { catchError, map, of, take } from 'rxjs';
import { Fact } from '../services/facts/fact-model';

export const factDetailsResolver: ResolveFn<Fact> = (route) => {
  const factsService: FactsService = inject(FactsService);
  const router: Router = inject(Router);
  const factId = route.paramMap.get('id') || '';
  return factsService.getById(factId).pipe(
    catchError(() => {
      router.navigate(['/']);
      return of({} as Fact);
    }),
    take(1)
  );
};
