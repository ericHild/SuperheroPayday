import { Component, OnInit } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { CommonModule } from "@angular/common";
import { HeroSearchComponent } from "../../components/heros-search/hero-search.component";
import { HeroCardComponent } from "../../components/heros-card/hero-card.component";
import { HeroPaieComponent } from "../../components/hero-paie/hero-paie.component";

@Component({
    selector: 'rh-dashboard',
    templateUrl: './rh-dashboard.component.html',
    styleUrl: 'rh-dashboard.component.scss',    
    imports: [CommonModule, HeroSearchComponent, HeroCardComponent, HeroPaieComponent],
    standalone: true
})
export class RHDashboardComponent implements OnInit {

    constructor() {}

    heros!: SuperHero[];    
    herosFiltered!:SuperHero[];

    hero!: SuperHero;

    ngOnInit(): void {
    }

    herosChange(heros: SuperHero[]) {
        this.herosFiltered = heros             
    }

    getHero(hero: SuperHero) {
        this.hero = hero;
    }
}
    