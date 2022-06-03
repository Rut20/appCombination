import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class AppHttpService {
    homeUrl = 'https://localhost:44326/Combination/'
    num: number = 0;
    combination: number[] = []
    pageSize = 10;
    pageNumber = 1;
    constructor(private _http: HttpClient, private router: Router) { }

    getNumCombination(): Observable<number> {
        return this._http.get<number>(this.homeUrl + 'GetStartApi/' + this.num);
    }

    getNextApi(): Observable<number[]> {
        return this._http.get<number[]>(this.homeUrl + 'GetNextApi')
    }

    getAsPromise(): Observable<any> {
        return this._http.get<any>(this.homeUrl+ 'GetAllApi/' + 1 + '/' + 10).pipe(map(res => res));
       
    }
}
