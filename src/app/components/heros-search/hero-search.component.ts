import { AfterContentInit, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, output } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../../services/superhero.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'cmp-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrl: './hero-search.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class HeroSearchComponent implements OnInit, OnDestroy {

    private heroService = inject(HeroService);

    heros!: SuperHero[];
    herosFiltered!:SuperHero[];
    
    searchValue = '';

    @Output() listOfHerosChange: EventEmitter<SuperHero[]> = new EventEmitter();

    subscription!: Subscription;

    constructor() {}

    ngOnInit(): void {
        this.getHeros();
    }

    getHeros() {
        this.subscription = this.heroService.getHeros().subscribe(res => {
            this.heros = res;
            this.herosFiltered = this.heros;
            this.listOfHerosChange.emit(this.herosFiltered);
        });
    }

    findHero() {
        this.herosFiltered = this.heros.filter(
            (value) => value.superHero.toLowerCase().startsWith(this.searchValue.toLowerCase())
        );
            
        this.listOfHerosChange.emit(this.herosFiltered); 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}