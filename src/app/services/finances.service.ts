import { IFinance, listFinances } from "../finances";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FinancesService {
  sumTotalFinances = new BehaviorSubject<number>(this.sumFinances());
  sumTotalFinances$ = this.sumTotalFinances.asObservable();

  constructor() {}

  createFinance(finance: IFinance): void {
    listFinances.push(finance);
    this.sumTotalFinances.next(this.sumFinances());
    localStorage.setItem("@myFinance", JSON.stringify(listFinances));
  }

  getFinances(): IFinance[] {
    return listFinances;
  }

  deleteFinance(id: string): void {
    const financeIndex = listFinances.findIndex(
      (finance: IFinance) => finance.id === id
    );
    listFinances.splice(financeIndex, 1);
    this.sumTotalFinances.next(this.sumFinances());
    localStorage.setItem("@myFinance", JSON.stringify(listFinances));
  }

  sumFinances(): number {
    return listFinances.reduce((acc: number, acv: IFinance) => {
      return acv.type === "entrada" ? acc + acv.value : acc - acv.value;
    }, 0);
  }
}
