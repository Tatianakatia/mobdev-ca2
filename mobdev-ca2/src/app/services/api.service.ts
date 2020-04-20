import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from  'rxjs/operators';


export enum SearchType{
    all='',
    quote_id = 'id',
    quote = 'quote',
    author = 'author',
    series = 'series',
   
    
    
   
}



@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url = 'https://breakingbadapi.com/api';

    constructor(private http: HttpClient) { }

    searchData(quote: string, author: SearchType): Observable<any>{
        return this.http.get(`${this.url}&quote=${encodeURI(quote)}?&author=${author}`)
       
        .pipe(
            map(results => {
                console.log('RAW: ', results)
                results['Search']
            })
        );
        }

    getDetails(id) {
        return this.http.get(`${this.url}?i=${id}&episode=full`);
    }

    

    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes');

    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
        ;
    }

    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters');

    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes');

    }
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
                .pipe(
            map(quoteresult => {
                console.log('RAW: ', quoteresult)
                quoteresult['Search']
            })
                );
    }

    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths');

    }

}