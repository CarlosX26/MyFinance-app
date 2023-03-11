import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormFinanceComponent } from "./components/form-finance/form-finance.component";
import { SumTotalComponent } from "./components/sum-total/sum-total.component";
import { CardFinanceComponent } from "./components/card-finance/card-finance.component";
import { ListFinancesComponent } from "./components/list-finances/list-finances.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormFinanceComponent,
    SumTotalComponent,
    CardFinanceComponent,
    ListFinancesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
