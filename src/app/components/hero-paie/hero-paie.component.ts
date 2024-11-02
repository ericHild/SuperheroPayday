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

    @Input() set heroObj(hero: SuperHero) {
        this._hero = hero;
        this.heroSalary(this._hero);
    }

    specimen_msg = 'Aucun héros sélectionné';
    
    salary = 0;

    private paymentNotification = inject(HeroSalaryPaymentNotificationService);

    ngOnInit(): void {}
    
    heroSalary(_hero: SuperHero) {
        if(_hero !== undefined) {
            this.salary = this.calculateSalary(_hero.hourlyRate, _hero.numberOfHoursWorked);
        }
    }

    payTheHero(hero: SuperHero) {
        this.paymentNotification.sendPayment(hero.id, 'Virement salare', this.salary);
    }

    
}