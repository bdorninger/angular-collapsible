import { Component, InjectionToken,  Input, Optional } from "@angular/core";

@Component({
  selector: "not-found",
  template: "<div>No component found for <{{address}}></div>",
  styles: ['div { color: red; padding: 10px 0px }']
})
export class NotFoundComponent {
  @Input()
  public address = "unknown";  
}
