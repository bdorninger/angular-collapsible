import { Component, VERSION } from '@angular/core';

const aname = 'Angular ' + VERSION.major + " : ";
let rec = 0;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = aname;

  public contExpanded(ev: boolean) {
    rec+=ev?1:0;
    this.name = aname + rec.toString();
  }
}
