import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { Stock } from './Stock';

@Injectable()
export class StockService {
  STOCK: any;

  constructor(private http: HttpClient) {}

  getStock() {
    return this.http
      .get<Stock>(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=75SILTV90V0SAI22'
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
