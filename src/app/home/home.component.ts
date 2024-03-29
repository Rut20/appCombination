import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppHttpService } from '../app.http.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timesCombinationStr: string = "";
  constructor(public _service: AppService, public _httpService: AppHttpService) { }
  public num = new FormControl('', [Validators.min(1), Validators.max(20), Validators.required]);

  ngOnInit(): void {
    this.isNumChangest();
  }
  isNumChangest() {
    this.num.valueChanges.subscribe(x => {
      if (this.num.valid)
        this.getNunTimesCombination()
    })
  }
  getNunTimesCombination() {
    this._httpService.num = this.num.value

    this._httpService.getNumCombination().subscribe(res => {
      
      this._service.timesCombination = res;
      this._service.numCombination = 0;
      this.timesCombinationStr = "	The total options for arranging numbers in a row is: " + res.toString();

    }, err => {

    });
  }
}
