import { Component, OnInit } from "@angular/core";
import { IFinance } from "src/app/finances";
import { FinancesService } from "src/app/services/finances.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  listFinances!: IFinance[];

  constructor(private financesService: FinancesService) {}

  ngOnInit(): void {
    this.listFinances = this.financesService.getFinances();
  }
}
