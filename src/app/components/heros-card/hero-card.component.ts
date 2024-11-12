import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { CommonModule } from "@angular/common";
import { HeroButtonDirective } from "../../directives/button/button.directive";
import { RouterLink } from "@angular/router";
import { SalaryNotificationComponent } from "../salary-notification/salary-notification.component";

@Component({
    selector: 'cmp-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrl: './hero-card.component.scss',
    standalone: true,
    imports: [CommonModule, HeroButtonDirective, RouterLink, SalaryNotificationComponent]
})
export class HeroCardComponent implements OnInit, OnDestroy {

    @Input() listOfHeros!: SuperHero[];
    
    @Output() heroReportChange: EventEmitter<SuperHero> = new EventEmitter();

    ngOnInit(): void {}

    sendReport(hero: SuperHero) {
        this.heroReportChange.emit(hero);
    }

    ngOnDestroy(): void {
    }
    
}