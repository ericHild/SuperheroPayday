import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuperHero } from "../../shared/models/superHero.model";
import { HeroButtonDirective } from "../../directives/button/button.directive";
import HeroSalary from "../../core/services/salaryManagement/salary";
import { PaymentNotificationContextService } from "../../core/services/paymentNotification/paymentNotificationContextService";
import { AlertNotificationStrategy } from "../../core/services/paymentNotification/alertNotificationStrategy";

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
    private paymentNotifContextService = inject(PaymentNotificationContextService);

    ngOnInit(): void {}
    
    // Calculate Salary
    heroSalary(hero: SuperHero): void {
        if(hero !== undefined) {
            this.salary = this.calculateSalary(hero.hourlyRate, hero.numberOfHoursWorked);
        }
    }

    alertNotificationPayment(hero: SuperHero): void {
        this.paymentNotifContextService.setStrategy(new AlertNotificationStrategy(this.paymentNotifContextService));
        this.paymentNotifContextService.executePayment(hero.id, 'Virement salare', this.salary);
    }

    sendSMSNotificationPayment(hero: SuperHero): void {}

    
}