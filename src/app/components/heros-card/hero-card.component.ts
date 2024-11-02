import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { SuperHero } from "../../models/superHero.model";
import { CommonModule } from "@angular/common";
import { HeroButtonDirective } from "../../directives/button/button.directive";
import { RouterLink } from "@angular/router";
import { HeroSalaryPaymentNotificationService } from "../../core/paymentNotification/send/send-payment.service";
import { delay, mergeMap, of, Subscription, switchMap } from "rxjs";
import { PaymentNotification } from "../../core/paymentNotification/send/send.model";

@Component({
    selector: 'cmp-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrl: './hero-card.component.scss',
    standalone: true,
    imports: [CommonModule, HeroButtonDirective, RouterLink]
})
export class HeroCardComponent implements OnInit, OnDestroy {

    @Input() listOfHeros!: SuperHero[];
    
    @Output() heroChange: EventEmitter<SuperHero> = new EventEmitter();

    private paymentNotification = inject(HeroSalaryPaymentNotificationService);
    paymentMessage$: any;

    notificationMsg!:PaymentNotification;

    batManNotification!:PaymentNotification;
    superManNotification!:PaymentNotification;
    spiderManNotification!:PaymentNotification;

    subscription!: Subscription;

    ngOnInit(): void {
        this.subscription = this.paymentNotification.getNotification()
        .pipe(mergeMap( (message) => of(message).pipe( delay(3000))
        ))
        .subscribe( (message) => {
            this.messagDistribution(message);
        });
    }

    setHero(hero: SuperHero) {
        this.heroChange.emit(hero);
    }

    // A extraire pour optimisation
    messagDistribution(message: PaymentNotification) {
        if(message.heroID === 15) {
            this.batManNotification = message;
        }
        if(message.heroID === 10) {
            this.spiderManNotification = message;
        }
        if(message.heroID === 8) {
            this.superManNotification = message;
        } 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
}