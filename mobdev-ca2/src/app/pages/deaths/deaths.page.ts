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
    searchTermName: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data: ', data);
        })
  }

    openDetails(death) {
        
        this.router.navigateByUrl('/tabs/deaths/${id}');
    }
/*
searchName(episode) {
    this.death = this.api.getName(this.searchTermName);
    console.log(this.death);
  }
  */
}
