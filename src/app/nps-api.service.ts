import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { npsApiKey } from './api-keys';

@Injectable()
export class NpsApiService {
  constructor(private http: Http) {
}

  getByState(state: string) {
    return this.http.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${npsApiKey}`);
  }

}
