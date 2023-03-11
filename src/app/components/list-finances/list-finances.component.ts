import { FinancesService } from "./../../services/finances.service";
import { Component, OnInit } from "@angular/core";
import { IFinance } from "src/app/finances";

@Component({
  selector: "app-list-finances",
  templateUrl: "./list-finances.component.html",
  styleUrls: ["./list-finances.component.css"],
})
export class ListFinancesComponent implements OnInit {
  listFinances!: IFinance[];

  constructor(private financesService: FinancesService) {}

  ngOnInit(): void {
    this.listFinances = this.financesService.getFinances();
  }
}
