import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { CommonModule } from "@angular/common";
import { HeroButtonDirective } from "../../directives/button/button.directive";
import { RouterLink } from "@angular/router";
import { HeroSalaryPaymentNotificationService } from "../../core/paymentNotification/send/send-payment.service";
import { delay, mergeMap, of, Subscription, switchMap } from "rxjs";
import { PaymentNotif } from "../../core/paymentNotification/send/payment.model";

@Component({
    selector: 'cmp-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrl: './hero-card.component.scss',
    standalone: true,
    imports: [CommonModule, HeroButtonDirective, RouterLink]
})
export class HeroCardComponent implements OnInit, OnDestroy {

    @Input() listOfHeros!: SuperHero[];
    
    @Output() heroReportChange: EventEmitter<SuperHero> = new EventEmitter();

    private paymentNotification = inject(HeroSalaryPaymentNotificationService);
    
    batManSalaryNotification!:PaymentNotif;
    superManSalaryNotification!:PaymentNotif;
    spiderManSalaryNotification!:PaymentNotif;

    subscription!: Subscription;

    ngOnInit(): void {
        this.subscription = this.paymentNotification.getNotification()
        .pipe(mergeMap( (message) => of(message).pipe( delay(3000))
        ))
        .subscribe( (message) => {
            this.messageDistribution(message);
        });
    }

    sendReport(hero: SuperHero) {
        this.heroReportChange.emit(hero);
    }

    // A extraire pour optimisation
    messageDistribution(message: PaymentNotif) {
        if(message.heroID === 15) {
            this.batManSalaryNotification = message;
        }
        if(message.heroID === 10) {
            this.spiderManSalaryNotification = message;
        }
        if(message.heroID === 8) {
            this.superManSalaryNotification = message;
        } 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
}