import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactDetails } from '../../services/facts/fact-model';
import { UserDisplayPipe } from '../../pipes/user-display.pipe';
import { HighlightNameDirective } from '../../directives/higlight-name.directive';

@Component({
  selector: 'app-fact-details',
  standalone: true,
  imports: [UserDisplayPipe, HighlightNameDirective],
  templateUrl: './fact-details.component.html',
  styleUrl: './fact-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactDetailsComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  fact: FactDetails = this.route.snapshot.data['fact'];
}
