import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-side',
  templateUrl: './body-side.component.html',
  styleUrls: ['./body-side.component.css']
})
export class BodySideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login = 'arcebido.earljohn';
  option1 = 'Quotation Processing';
  option2 = 'Quotation Inquiry';
}
