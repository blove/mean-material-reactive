import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";

// models
import { Hero } from "../../models/hero";

@Injectable()
export class HerosService {

  private readonly URL = "http://localhost:8080/api/heros"

  constructor(
    protected httpClient: HttpClient,
  ) {}

  public create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.URL, hero);
  }

  public delete(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.URL}/${hero._id}`);
  }

  public get(id: string): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.URL}/${id}`);
  }

  public list(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>(this.URL);
  }

  public update(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.URL}/${hero._id}`, hero);
  }

}
