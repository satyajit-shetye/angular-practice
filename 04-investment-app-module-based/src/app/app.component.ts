import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { IInvestmentInput, IInvestmentResult } from './investment.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentCalculationService } from './investment-calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  investmentCalculationService = inject(InvestmentCalculationService);
  
  onCalculate(data: IInvestmentInput) {
    this.investmentCalculationService.calculateInvestmentResults(data);
  }
}
