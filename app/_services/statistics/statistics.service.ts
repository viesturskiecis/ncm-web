import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
 
import { Statistics } from '../../_models/statistics/index';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class StatisticsService {

    headers: Headers;

    constructor(private http: Http) {
        let username: string = 'ncm';
        let password: string = 'ncm';
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
     }
 
    getStatistics(): Observable<Statistics[]> {
        return this.http.get('http://localhost:9090/api/statistics/', { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
      
      }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
          console.error(body);
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
 
}