import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './Stock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input: string;
  stock: Stock;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.helper();
  }

  helper() {
    this.http
      .get(
        'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.input}&apikey=75SILTV90V0SAI22'
      )
      .subscribe((data) => {
        // alert(JSON.stringify(data));
        let x: Stock = data['Global Quote'];
        this.stock = x;
        // alert(this.stock['01. symbol']);
      });
  }
}
