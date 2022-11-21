import {
  faCoffee,
  faSquare,
  faCheckSquare
 } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  faCoffee = faCoffee;
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
