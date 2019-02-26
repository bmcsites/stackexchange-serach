import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from "@services/http.service";

@Component({
  selector: 'app-se-list',
  templateUrl: './se-list.component.html',
  styleUrls: ['./se-list.component.scss']
})
export class SeListComponent {
  data: any;
  @Output() valueChange = new EventEmitter();
  constructor(private httpService: HttpService) { }

  searchData (searchTag){
    if(searchTag === '' || !searchTag){
      this.data = [];
    } else {
      this.httpService.getQuestions(searchTag).subscribe(data => {
          // @ts-ignore
          if (data.items) {
            // @ts-ignore
            this.data = data.items;
          }
        },
        err => {
          console.log('err:::', err);
        });
    }
  }

  showInfo(q){
    this.valueChange.emit(q);
  }
}
