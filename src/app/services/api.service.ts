import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
} from '@angular/common/http';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';


@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private ENV = environment.apiUrl;

    constructor(public http: HttpClient, public store$: Store) { }

    public get(): Observable<any> {
      return this.http.get(`${this.ENV}posts`);
    }
}
