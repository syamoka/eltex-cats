import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Fact } from '../../../services/facts/fact-model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fact-card',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './fact-card.component.html',
  styleUrl: './fact-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactCardComponent {
  fact = input.required<Fact>();
}
