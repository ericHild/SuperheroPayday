import { AfterContentInit, AfterViewInit, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, output } from "@angular/core";
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
export class HeroSearchComponent implements OnInit {

    @Input() superHeros: SuperHero[] = [];
    superHerosFiltered: SuperHero[] = [];
    
    searchValue = '';

    @Output() superHerosChange: EventEmitter<SuperHero[]> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
        this.superHerosFiltered = this.superHeros;
    }

    findHero() {
        this.superHerosFiltered = this.superHeros.filter(
            (value) => value.superHero.toLowerCase().startsWith(this.searchValue.toLowerCase())
        );
            
        this.superHerosChange.emit(this.superHerosFiltered); 
    }

}