import { Component } from "@angular/core";
import { IFinance } from "src/app/finances";
import { FinancesService } from "src/app/services/finances.service";
import { UUID } from "uuid-generator-ts";

@Component({
  selector: "app-form-finance",
  templateUrl: "./form-finance.component.html",
  styleUrls: ["./form-finance.component.css"],
})
export class FormFinanceComponent {
  constructor(private financesService: FinancesService) {}

  description: string = "";
  value: string = "";
  type: string = "";

  submit(): void | null {
    const newFinance: IFinance = {
      id: this.generateUuid(),
      description: this.description,
      value: Number(this.value),
      type: this.type,
    };

    if (
      !Object.values(newFinance).every((key: number | string) => Boolean(key))
    ) {
      return null;
    }

    this.financesService.createFinance(newFinance);
    this.description = "";
    this.value = "";
    this.type = "";
  }

  generateUuid(): string {
    const uuid = new UUID();
    return uuid.getDashFreeUUID();
  }
}
