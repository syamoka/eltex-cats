import { Routes } from '@angular/router';
import { FactsListComponent } from './pages/facts-list/facts-list.component';
import { FactDetailsComponent } from './pages/fact-details/fact-details.component';
import { factDetailsResolver } from './resolvers/fact-details.resolver';

export const routes: Routes = [
  { path: '', component: FactsListComponent },
  {
    path: 'fact/:id',
    loadComponent: () =>
      import('./pages/fact-details/fact-details.component').then(
        (c) => c.FactDetailsComponent
      ),
    resolve: { fact: factDetailsResolver },
  },
  { path: '**', redirectTo: '' },
];
