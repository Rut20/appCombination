import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AppHttpService } from '../app.http.service';
import { AppService } from '../app.service';
import { PaginationQuery } from './all-combination.model';

@Component({
  selector: 'app-all-combination',
  templateUrl: './all-combination.component.html',
  styleUrls: ['./all-combination.component.scss']
})
export class AllCombinationComponent implements OnInit {
  displayedColumns: string[] = ['combination'];
  resultsLength: number = 0;
  paginationQuery = new PaginationQuery();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  combinationList: any;

  constructor(public _service: AppService, public _httpService: AppHttpService) { }

  ngOnInit(): void {
    this.initPage()
  }
  //   getAllCombination() {
  //     this._httpService.getAllApi().subscribe(res => {
  //         this.combinationList = res.result.map((item: any) => {
  //             this.router.navigate(['/allCombination'])

  //             return {
  //                 combination: item
  //             }

  //         })

  //     })
  //     this.setPaginator();

  // }
  initPage() {
    this._httpService.getAsPromise().subscribe(res => {
      this.combinationList = res.result.map((item: any) => {

        return {
          combination: item
        }

      })
      this.setPaginator();
    })
  }
  onPageChanged(paginationQuery: any) {
    this._httpService.pageNumber = paginationQuery.pageIndex;
    this._httpService.pageSize = paginationQuery.pageSize
    this.initPage();
  }
  private setPaginator() {
    this.combinationList.paginator = this.paginator;
    this._service.severalPossibleCombinations$.subscribe(item => {
      this.resultsLength = item;
    })
    this.combinationList.paginator._intl.itemsPerPageLabel = ' ';
  }
}
