import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, SearchType } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    quote: any;
    quoteId: string;
    
  constructor(private activatedRoute: ActivatedRoute, 
        private http: HttpClient,
        private api: ApiService) { }

  ngOnInit() {
      	
    let quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote = res[0];
      console.log(JSON.stringify(this.quote));
    });


   /* this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
        this.quote = res[0];
            console.log(JSON.stringify(this.quote));
        })
    */
  }

}
