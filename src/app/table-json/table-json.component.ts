import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-table-json',
  templateUrl: './table-json.component.html',
  styleUrls: ['./table-json.component.css']
})
export class TableJsonComponent implements OnInit {
constructor (private httpService: HttpClient) { }
arrData: string [];
  

  ngOnInit() {
    this.httpService.get('./assets/db.json').subscribe(
     data => {
        this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
        
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
