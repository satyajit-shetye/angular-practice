import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<IInvestmentInput>();
  formData = signal({
    initialInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10',
  });

  onSubmit(): void {
    this.calculate.emit({
      initialInvestment: +this.formData().initialInvestment,
      annualInvestment: +this.formData().annualInvestment,
      expectedReturn: +this.formData().expectedReturn,
      duration: +this.formData().duration,
    });
  }
}
