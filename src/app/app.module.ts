import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CollapsibleContainerComponent } from "./collapsible-container/collapsible-container.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CollapsibleContainerComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
