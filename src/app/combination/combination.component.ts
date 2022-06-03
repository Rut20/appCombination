import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {

  constructor(public _service: AppService) { }

  ngOnInit(): void {
  }
// getNext(){
//   this._service.getNextFromApigetNextFromApi().subscribe;
// }
}
