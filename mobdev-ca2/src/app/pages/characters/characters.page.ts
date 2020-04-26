import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll

    characters: Observable<any>;

    constructor(
        private router: Router,
        private api: ApiService) { }

    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my datacharacters: ', data);
        })
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${character.char_id}`);
        console.log('my dataCharacterDetails: ', characterId);
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            if (this.api.getQuote.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
}