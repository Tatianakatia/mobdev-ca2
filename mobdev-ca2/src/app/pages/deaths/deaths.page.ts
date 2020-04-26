import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    searchTerm: any = "";


    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my datadeaths: ', data);
        })
    }

    openDetails(death) {
    let deathId = death.death_id;
        this.router.navigateByUrl(`/tabs/deaths/${death.death_id}`);
        console.log('my dataDeathdetails: ', deathId);
    }

    
    openCount(author) {
    let countdeathId = this.api.getAuthor(author);
        this.router.navigateByUrl(`/tabs/deaths${author.author}`);
        console.log('my dataCountDeath: ', countdeathId);
    }

    searchDeath(death) {
          return death.responsible.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1;
      }
}