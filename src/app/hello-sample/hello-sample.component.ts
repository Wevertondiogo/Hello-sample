import { Component, createNgModuleRef, Injector, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello-sample',
  templateUrl: './hello-sample.component.html',
  styleUrls: ['./hello-sample.component.css']
})
export class HelloSampleComponent implements OnInit, OnDestroy {

  @ViewChild("buttonComponent", { read: ViewContainerRef })
  public buttonComponent!: ViewContainerRef;

  @ViewChild("lazyFormComponent", { read: ViewContainerRef })
  public lazyFormComponent!: ViewContainerRef;

  @Input()
  public message!: string;

  formSubmittedSubscription = new Subscription();


  constructor(private injector: Injector) { }

  public ngOnInit(): void {
    this.loadButton();
    this.loadForm();
  }

 public ngOnDestroy(): void {
    this.formSubmittedSubscription.unsubscribe();
}

  private async loadButton(): Promise<void> {
    const { ButtonComponent } = await import('./../button/button.component');
    this.buttonComponent.clear();
    this.buttonComponent.createComponent(ButtonComponent);
  }

  private async loadForm() {
    const { LazyFormModule } = await import("./../lazy-form/lazy-form.module");
    const moduleRef = createNgModuleRef(LazyFormModule, this.injector)
    const lazyFormComponent = moduleRef.instance.getComponent();
    this.lazyFormComponent.clear();
    const { instance } = this.lazyFormComponent.createComponent(lazyFormComponent, {ngModuleRef: moduleRef});
    instance.buttonTitle = "Contact Us";
    this.formSubmittedSubscription = instance.formSubmitted.subscribe(() =>
      console.log("The Form Submit Event is captured!")
    );  }

}
