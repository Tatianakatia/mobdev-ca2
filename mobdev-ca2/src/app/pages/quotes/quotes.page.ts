import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService, SearchType } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  
    results: Observable<any>;
    searchTerm = '';
    author: SearchType = SearchType.all;

    quotes: Observable<any>;
  
    constructor(private navController: NavController, 
            private router: Router, 
            private api: ApiService) { }
  
    ngOnInit() {
      this.quotes = this.api.getQuotes();
            this.quotes.subscribe(data => {
            console.log('my dataquote: ', data);
        })
   
    }

    searchChanged(){
        this.quotes = this.api.searchData(this.searchTerm, this.author);
        console.log('My resultssearchquote: ', this.quotes);

        this.results.subscribe(res => {
            console.log( 'My Data: ', this.quotes )
         
        })
    }

    openDetails(quote) {
        
        this.router.navigateByUrl(`/tabs/quotes/${quote.id}`);
        console.log('my dataquotedetails: ', quote);
    }

   
}

