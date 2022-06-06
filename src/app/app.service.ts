import { Injectable, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppHttpService } from './app.http.service';
import { PaginationQuery } from './all-combination/all-combination.model';
import { MatPaginator } from '@angular/material/paginator';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    combination: number[] = []
    numCombination = 0;
    pageSize = 10;
    pageNumber = 1;
  resultsLength: number = 0;
  timesCombination: number = 0;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
    
    combinationList: any;
    paginationQuery = new PaginationQuery();

    constructor(private router: Router, public _httpService: AppHttpService) { }

    getNextCobination() {
        this._httpService.getNextApi().subscribe(res => {
            this.combination = res
            console.log(res);
            
            this.numCombination++
            this.router.navigate(['/combination'])
        })
    }

    getAllCombination() {
        this.router.navigate(['/allCombination'])   

    }
  
  public severalPossibleCombinations$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

}
