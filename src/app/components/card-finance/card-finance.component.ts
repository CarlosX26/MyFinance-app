import { FinancesService } from "src/app/services/finances.service";
import { Component, Input } from "@angular/core";
import { IFinance } from "src/app/finances";

@Component({
  selector: "app-card-finance",
  templateUrl: "./card-finance.component.html",
  styleUrls: ["./card-finance.component.css"],
})
export class CardFinanceComponent {
  @Input() finance!: IFinance;

  constructor(private financesService: FinancesService) {}

  removeFinance(): void {
    this.financesService.deleteFinance(this.finance.id);
  }
}
