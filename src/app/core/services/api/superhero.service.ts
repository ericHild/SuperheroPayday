import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { SuperHero } from "../../../shared/models/superHero.model";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private readonly LOCAL_JSON_URL = './assets/data/superheros.json';

    constructor(private http: HttpClient) {}

    getHeros():Observable<SuperHero[]> {        
        return this.http.get<SuperHero[]>(this.LOCAL_JSON_URL).pipe(
            catchError( (error: HttpErrorResponse) => {
                return throwError( () => error);
            })
        );
    }

    getHero(id:number):Observable<SuperHero | undefined> {
        return this.http.get<SuperHero[]>(this.LOCAL_JSON_URL).pipe(
            map( (data) => data.find(hero => hero.id === id)),
            catchError( (error: HttpErrorResponse) => {
                return throwError( () => error);
            })
        );
    }

}