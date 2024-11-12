import { Component, inject, Input, OnInit } from "@angular/core";
import { PaymentNotif } from "../../core/paymentNotification/send/payment.model";
import { SuperHero } from "../../models/superHero.model";
import { HeroSalaryPaymentNotificationService } from "../../core/paymentNotification/send/send-payment.service";
import { delay, mergeMap, of } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'cmp-salary-notification',
    templateUrl: './salary-notification.component.html',
    styleUrl: './salary-notification.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class SalaryNotificationComponent implements OnInit {

    
    @Input() hero!: SuperHero;   

    paymentNotificationService = inject(HeroSalaryPaymentNotificationService);

    paymentNotification!:PaymentNotif;
    
    ngOnInit(): void {
        this.paymentNotificationService.getNotification().pipe(
            mergeMap( (message) => of(message).pipe( delay(3000)) )
        )
        .subscribe( (message) => {
        this.paymentNotification = message;     
    });
    }
}