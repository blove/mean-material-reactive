import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

// rxjs
import { Observable } from "rxjs/Observable";

// models
import { Hero } from "../../models/hero";

@Injectable()
export class HerosService {

  private readonly URL = "http://localhost:8080/api/heros"

  constructor(
    protected http: Http,
  ) {}

  public create(hero: Hero): Observable<Hero> {
    return this.http
      .post(this.URL, hero)
      .map(this.extractObject);
  }

  public delete(hero: Hero): Observable<Hero> {
    return this.http
      .delete(`${this.URL}/${hero._id}`)
      .map(result => hero);
  }

  public get(id: string): Observable<Hero> {
    return this.http
      .get(`${this.URL}/${id}`)
      .map(this.extractObject);
  }

  public list(): Observable<Array<Hero>> {
    return this.http
      .get(this.URL)
      .map(response => response.json() || []);
  }

  public update(hero: Hero): Observable<Hero> {
    return this.http
      .put(`${this.URL}/${hero._id}`, hero)
      .map(this.extractObject);
  }

  private extractObject(res: Response): Object {
    const data: any = res.json();
    return data || {};
  }

}
