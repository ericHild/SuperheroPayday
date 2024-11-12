import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperHero } from "../../models/superHero.model";
import { HeroButtonDirective } from "../../directives/button/button.directive";
import HeroSalary from "../../core/salaryManagement/salary";
import { HeroSalaryPaymentNotificationService } from "../../core/paymentNotification/send/send-payment.service";

@Component({
    selector: 'cmp-hero-paie',
    templateUrl: './hero-paie.component.html',
    styleUrl: './hero-paie.component.scss',
    standalone: true,
    imports: [CommonModule, HeroButtonDirective]
})
export class HeroPaieComponent extends HeroSalary implements OnInit  {

    _hero!: SuperHero;

    @Input() set hero(hero: SuperHero) {
        this._hero = hero;
        this.heroSalary(this._hero);
    }

    specimen_msg = 'Aucun héros sélectionné';    
    salary = 0;

    // Service
    private paymentNotifService = inject(HeroSalaryPaymentNotificationService);

    ngOnInit(): void {}
    
    // Calculate Salary
    heroSalary(hero: SuperHero) {
        if(hero !== undefined) {
            this.salary = this.calculateSalary(hero.hourlyRate, hero.numberOfHoursWorked);
        }
    }

    payTheHero(hero: SuperHero) {
        this.paymentNotifService.sendPayment(hero.id, 'Virement salare', this.salary);
    }

    
}