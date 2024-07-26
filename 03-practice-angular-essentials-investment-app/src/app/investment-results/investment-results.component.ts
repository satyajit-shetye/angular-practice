import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculationService } from '../investment-calculation.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentCalculationService = inject(InvestmentCalculationService);

  // To make sure the signal is not updated
  results = this.investmentCalculationService.result.asReadonly();
}
