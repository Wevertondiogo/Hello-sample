import { BackendService } from './../backend.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lazy-form',
  templateUrl: './lazy-form.component.html',
  styleUrls: ['./lazy-form.component.css']
})
export class LazyFormComponent implements OnInit {
  @Input()
  buttonTitle: string = "Submit";

  @Output() formSubmitted = new EventEmitter();

  simpleForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required]),
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
}
