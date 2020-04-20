import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  
    quotes: Observable<any>;
  
    constructor(private navController: NavController, private router: Router, private api: ApiService) { }
  
    ngOnInit() {
      this.quotes = this.api.getQuotes();
            this.quotes.subscribe(data => {
            console.log('my data: ', data);
        })
  }

    openDetails(quote) {
        
        this.router.navigateByUrl('/tabs/quotes/${id}');
    }
}

