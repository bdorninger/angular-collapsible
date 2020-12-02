import { Component, ComponentFactoryResolver,  EventEmitter, Injector,  Input, OnInit, Output, ViewChild, ViewContainerRef } from "@angular/core";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: "collapsible-container",
  templateUrl: "./collapsible-container.component.html",
  styleUrls: ["./collapsible-container.component.css"]
})
export class CollapsibleContainerComponent implements OnInit {
  private _collapsed = true;
  private _titleText = "Object Collapsible ";

  @Output()
  private expanded: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public set titleText(text: string) {
    this._titleText = text;
  }

  public get titleText(): string {
    return `${this._titleText} is ${
      this.isExpanded ? "expanded" : "collapsed"
    }`;
  }

  @ViewChild('content',{read: ViewContainerRef,static:true}) 
  private vref: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngOnInit() {
    this.expanded.subscribe(exp => {
      if(exp) {
        this.addComps();
      }
    })
  }

  private addComps() {
    const fac = this.resolver.resolveComponentFactory(NotFoundComponent);
    const compRef = fac.create(this.vref.injector);
    compRef.instance.address = "DYN!"
    this.vref.insert(compRef.hostView);
  }

  public toggleCollapsed() {
    this._collapsed = !this._collapsed;
    this.expanded.emit(this.isExpanded);
  }

  public get isCollapsed() {
    return this._collapsed;
  }

  public get isExpanded() {
    return !this.isCollapsed;
  }
}
