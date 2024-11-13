import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperHero } from "../../shared/models/superHero.model";
import { RouterLink } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    selector: 'cmp-hero-profil',
    templateUrl: './hero-profil.component.html',
    styleUrl: './hero-profil.component.scss',    
    imports: [CommonModule, RouterLink],
    standalone: true,
})
export class HeroProfilComponent implements OnInit  {

    @Input() hero!: SuperHero | undefined;

    private location = inject(Location)

    ngOnInit(): void { }

    back() {
        this.location.back();
    }

}