import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';

  constructor(private http: HttpClient) {}

  pesquisar(termo: string): Observable<any> {
    return this.http.jsonp(this.url + termo, 'callback');
  }
}


