import { Component, inject, OnInit } from "@angular/core";
import { HeroService } from "../../services/superhero.service";
import { ActivatedRoute } from "@angular/router";
import { SuperHero } from "../../models/superHero.model";
import { HeroProfilComponent } from "../../components/hero-profil/hero-profil.component";

@Component({
    selector: 'hero-datail',
    templateUrl: './hero-detail.component.html',
    styleUrl: './hero-detail.component.scss',
    imports: [HeroProfilComponent],
    standalone: true
})
export class HeroDetailComponent implements OnInit {

    private activatedRoute = inject(ActivatedRoute);
    private heroService = inject(HeroService);

    urlID = 0;
    hero: SuperHero | undefined;
    
    ngOnInit(): void {
        this.activatedRoute.params.subscribe( params => {
            this.urlID = +params['id'];
            this.heroService.getHero(this.urlID).subscribe( res => {
                this.hero = res;
            })
        });
    }
}