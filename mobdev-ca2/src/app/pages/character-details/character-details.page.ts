import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavouriteCharacters = false;
    characterId = null;

     constructor(private activatedRoute: ActivatedRoute,
                   private api: ApiService,
                   private navCtrl: NavController,
                   private favouriteService: FavouriteService ) { }

  ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
        this.character = res[0];
           // console.log(JSON.stringify(this.character));
        })

        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFav => {
            this.isFavouriteCharacters = isFav;
        })
  }

 favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = true;
        })
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacters = false;
        })
    }

}


