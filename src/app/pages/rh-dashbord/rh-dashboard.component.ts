import { AfterViewChecked, AfterViewInit, Component, inject, OnInit } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { CommonModule } from "@angular/common";
import { HeroSearchComponent } from "../../components/heros-search/hero-search.component";
import { HeroCardComponent } from "../../components/heros-card/hero-card.component";
import { HeroPaieComponent } from "../../components/hero-paie/hero-paie.component";
import { HeroService } from "../../services/superhero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'rh-dashboard',
    templateUrl: './rh-dashboard.component.html',
    styleUrl: 'rh-dashboard.component.scss',    
    imports: [CommonModule, HeroSearchComponent, HeroCardComponent, HeroPaieComponent],
    standalone: true
})
export class RHDashboardComponent implements OnInit {

    title = 'Dashboard';

    private route = inject(ActivatedRoute);

    superHeros!: SuperHero[];    
    herosFiltered!:SuperHero[];

    hero!: SuperHero;

    ngOnInit(): void {
        // Depuis le resolver
        this.superHeros = this.route.snapshot.data['heros'];
        this.initFilterdListForHeroCard();
    }

    superHerosChange(heros: SuperHero[]) {
        this.herosFiltered = heros;
    }

    getHero(hero: SuperHero) {
        this.hero = hero;
    }

    initFilterdListForHeroCard() {
        this.herosFiltered = this.superHeros;
    }

}
    