import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  resultsLength: number =this._service.timesCombination
  paginationQuery = new PaginationQuery();
  currentN: number = 0;
  activeRouteTabSubscription: Subscription | null = null;;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  combinationList: any;

  constructor(public _service: AppService, public _httpService: AppHttpService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.resultsLength=this._service.timesCombination
    // this.activeRouteTabSubscription = this.activeRoute.params.subscribe((urlParameters) => {
    //   this.currentN = urlParameters['n'];
    // });
    this.initPage()
  }
 
  initPage() {
    this._httpService.getAsPromise<any>().subscribe(res => {
      this.combinationList = res.map((item: any) => {
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
