// Angular's
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  // create call to server to get images.
  getQuestions(tag) {
    return this.http.get('https://api.stackexchange.com/2.2/tags/' + tag + '/faq?site=stackoverflow');
  }
}
