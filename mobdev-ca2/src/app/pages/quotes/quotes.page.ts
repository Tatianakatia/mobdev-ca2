import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    search: any = "";

    constructor(
        private router: Router,
        private api: ApiService) { }

    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my dataQuotes: ', data);
        })

    }


    openDetails(quote) {
    let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quote.quote_id}`);
        console.log('my dataDeathdetails: ', quoteId);


    }



    searchQuote(quote) {
        // console.log(death.author);
        return quote.responsible.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    }

    

}