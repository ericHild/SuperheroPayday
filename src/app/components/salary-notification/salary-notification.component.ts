import { Component, inject, Input, OnInit } from "@angular/core";
import { PaymentNotif } from "../../shared/models/payment.model";
import { SuperHero } from "../../shared/models/superHero.model";
import { delay, mergeMap, of } from "rxjs";
import { CommonModule } from "@angular/common";
import { PaymentNotificationContextService } from "../../core/services/paymentNotification/paymentNotificationContextService";

@Component({
    selector: 'cmp-salary-notification',
    templateUrl: './salary-notification.component.html',
    styleUrl: './salary-notification.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class SalaryNotificationComponent implements OnInit {
    
    @Input() hero!: SuperHero;   

    paymentNotificationContextService$ = inject(PaymentNotificationContextService);

    paymentNotification!:PaymentNotif;
    
    ngOnInit(): void {
        this.paymentNotificationContextService$.getNotifSubjectPayment().pipe(
            mergeMap( (message) => of(message).pipe( delay(3000)) )
        )
        .subscribe( (message) => {
        this.paymentNotification = message;     
    });
    }
}