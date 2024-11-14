import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FactsService } from '../../services/facts/facts.service';
import { Observable } from 'rxjs';
import { Fact } from '../../services/facts/fact-model';
import { AsyncPipe } from '@angular/common';
import { FactCardComponent } from './fact-card/fact-card.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-facts-list',
  standalone: true,
  imports: [AsyncPipe, FactCardComponent, LoaderComponent],
  templateUrl: './facts-list.component.html',
  styleUrl: './facts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsListComponent {
  private readonly factsService: FactsService = inject(FactsService);
  public readonly facts$: Observable<Fact[]> =
    this.factsService.getFactsWithRandomCatImages();
}
