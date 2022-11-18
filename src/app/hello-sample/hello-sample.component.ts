import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-hello-sample',
  templateUrl: './hello-sample.component.html',
  styleUrls: ['./hello-sample.component.css']
})
export class HelloSampleComponent implements OnInit {

  @ViewChild("buttonComponent", { read: ViewContainerRef })
  public buttonComponent!: ViewContainerRef;

  @Input()
  public message!: string;

  constructor() { }

  public ngOnInit(): void {
    this.loadExternalComponent();
  }

  private async loadExternalComponent(): Promise<void> {
    const { ButtonComponent } = await import('./../button/button.component');
    this.buttonComponent.clear();
    this.buttonComponent.createComponent(ButtonComponent);
  }

}
