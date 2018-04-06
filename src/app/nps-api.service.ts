import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NpsApiService {

  constructor(private http: Http) {
}

  getByState(state: string) {
    return this.http.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=hhOxJqKDYjUUBhNZ67cmASlguR9LsrdkDP7GRWNy`)
  }

}
