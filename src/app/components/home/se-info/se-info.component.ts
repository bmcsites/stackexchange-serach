import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-info',
  templateUrl: './se-info.component.html',
  styleUrls: ['./se-info.component.scss']
})
export class SeInfoComponent implements OnInit {
  q: any;

  constructor() {
    this.q = undefined;
  }

  ngOnInit() {
  }

  showInfo(q) {
    this.q = q;
  }

}
