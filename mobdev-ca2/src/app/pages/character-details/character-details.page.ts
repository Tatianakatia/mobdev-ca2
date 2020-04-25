import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: Observable<any>;
    characterId = null;

     constructor(private activatedRoute: ActivatedRoute,
                   private api: ApiService,
                   private navCtrl: NavController) { }

  ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
        this.character = res[0];
           // console.log(JSON.stringify(this.character));
        })
  }

    goBack() {
    this.navCtrl.back();
  }
  //openWebsite() {
  //    window.open(this.character.Website, "_blank");
 // }

}


