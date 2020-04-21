import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum SearchType {
    all = '',
    quote_id = 'id',
    quote = 'quote',
    author = 'author',
    series = 'series',




}



@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url = 'https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/quotes.json';

    constructor(private http: HttpClient) { }

    searchData(quote: string, author: SearchType): Observable<any> {
        return this.http.get(`${this.url}&quote=${encodeURI(quote)}?&author=${author}`)

            .pipe(
                map(results => {
                    console.log('RAW: ', results)
                    results['SearchQuotes']
                })
            );
    }

    /*
    getDetails(id) {
        return this.http.get(`${this.url}?i=${id}&episode=full`);
    }
*/

/*

    getEpisodes() {
        return this.http.get('https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/episodes.json');

    }


    getEpisode(id) {
        return this.http.get(`https://8100-af287837-f97f-4d02-b72c-dc4087fbbf89.ws-eu01.gitpod.io/assets/episodes.json/${id}`);
    }

*/
        
    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes');

    }
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }


 

    getCharacters() {
        return this.http.get('https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/characters.json');

    }
    getCharacter(id) {
        return this.http.get(`https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/characters.json/${id}`);
    }


    /*
    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters');

    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }
*/
    getQuotes() {
        return this.http.get('https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/quotes.json');

    }
    getQuote(id) {
        return this.http.get(`https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/quotes.json/${id}`)
      
    }

    getDeaths() {
        return this.http.get('https://8100-e197f891-bff0-4c6d-a3c7-d99e04e593e8.ws-eu01.gitpod.io/assets/deaths.json');

    }

}