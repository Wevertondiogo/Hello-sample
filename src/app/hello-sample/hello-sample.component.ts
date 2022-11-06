import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-sample',
  templateUrl: './hello-sample.component.html',
  styleUrls: ['./hello-sample.component.css']
})
export class HelloSampleComponent implements OnInit {

  @Input()
  public message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
