import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;

    constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private api: ApiService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(id).subscribe(res => {
            this.episode = res;
        });
    }

}
