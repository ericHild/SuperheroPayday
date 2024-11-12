import { ResolveFn } from "@angular/router";
import { SuperHero } from "../models/superHero.model";
import { Observable } from "rxjs";
import { HeroService } from "../services/superhero.service";
import { inject } from "@angular/core";

export const herosResolver: ResolveFn<SuperHero[]> = ():Observable<SuperHero[]> => {

    const superHeroService = inject(HeroService);

    return superHeroService.getHeros();
}