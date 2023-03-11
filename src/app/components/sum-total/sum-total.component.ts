import { FinancesService } from "src/app/services/finances.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sum-total",
  templateUrl: "./sum-total.component.html",
  styleUrls: ["./sum-total.component.css"],
})
export class SumTotalComponent implements OnInit {
  sumTotal: number = 0;

  constructor(private financesService: FinancesService) {}

  ngOnInit(): void {
    this.financesService.sumTotalFinances$.subscribe(
      (data) => (this.sumTotal = data)
    );
  }
}
