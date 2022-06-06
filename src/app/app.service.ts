import { Injectable, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    pageNumber = 0;
    timesCombination: number = 0;


    @ViewChild(MatPaginator) paginator!: MatPaginator;

    combinationList: any;
    paginationQuery = new PaginationQuery();

    constructor(private router: Router, public _httpService: AppHttpService) { }

    getNextCobination() {
        this._httpService.getNextApi().subscribe(res => {
            this.combination = res

            this.numCombination++
            this.router.navigate(['/combination'])
        }, err => {

        });
    }

    getAllCombination() {
        this.router.navigate(['/allCombination'])

    }

    reset() {
        this.router.navigate(['/home'])
    }

    return() {
        this.router.navigate(['/combination'])
    }
}
