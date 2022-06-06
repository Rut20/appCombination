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
  paginationQuery = new PaginationQuery();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  combinationList: any;

  constructor(public _service: AppService, public _httpService: AppHttpService) { }

  ngOnInit(): void {
    this.initPage()
  }
 
  initPage() {
    this._httpService.getAsPromise<any>().subscribe(res => {
      this.combinationList = res.map((item: any) => {
        return {
          combination: item
        }
      })
      this._service.combination=res[9]

      this.setPaginator();
    }, err => {

    });
  }

  onPageChanged(paginationQuery: any) {
    this._httpService.pageNumber = paginationQuery.pageIndex;
    this._httpService.pageSize = paginationQuery.pageSize
    this.initPage();
  }

  private setPaginator() {
    this.combinationList.paginator = this.paginator;
    this.combinationList.paginator._intl.itemsPerPageLabel = ' ';
  }
}
