import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpModule, Http } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutesConfig: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutesConfig),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
