import { Component } from '@angular/core';

@Component({
  selector: 'app-se-info',
  templateUrl: './se-info.component.html',
  styleUrls: ['./se-info.component.scss']
})
export class SeInfoComponent {
  q: any;

  constructor() {
    this.q = undefined;
  }

  showInfo(q) {
    this.q = q;
  }

}
