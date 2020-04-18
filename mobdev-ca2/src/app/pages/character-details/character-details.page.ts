import { Component, OnInit } from '@angular/core';
import { /*Router,*/ ActivatedRoute } from '@angular/router';
//import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: Observable<any>;
    characterId = null;

     constructor(private activatedRoute: ActivatedRoute,
              /*  private navController: NavController, */
              /*  private router: Router, */
                private api: ApiService) { }

  ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
        this.character = res[0];
            console.log(JSON.stringify(this.characterId.char_id));
        })
  }

}


