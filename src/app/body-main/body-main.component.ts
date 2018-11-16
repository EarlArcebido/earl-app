import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sectionI = '50,000,000.00';
  sectionII = '0.00';
  sectionIII = '0.00';
  deductible = 'Deductible applicable to all quote, if any';
  remarks = 'Various Remarks';
}
