import { TextModule } from './../../text/text.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from './../../backend.service';

@Component({
  selector: 'app-standalone-lazy-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextModule
  ],
  templateUrl: './lazy-form.component.html',
  styleUrls: ['./lazy-form.component.css']
})
export class StandaloneLazyFormComponent implements OnInit {
  @Input()
  buttonTitle: string = "Submit";

  @Output() formSubmitted = new EventEmitter();

  simpleForm = new UntypedFormGroup({
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    name: new UntypedFormControl("", [Validators.required]),
  });

  get name() {
    return this.simpleForm.get("name");
  }

  get email() {
    return this.simpleForm.get("email");
  }

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {}

  getNameErrorMessage() {
    if (this.name?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  getEmailErrorMessage() {
    if (this.email?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  submitForm() {
    if (this.email?.invalid || this.name?.invalid) return;
    this.backendService.submitForm();
    this.formSubmitted.emit();
    alert("Form submitted successfully");
  }

  getComponent() {
    return StandaloneLazyFormComponent;
  }
}
