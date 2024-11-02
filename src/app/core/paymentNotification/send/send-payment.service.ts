import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { PaymentNotification } from "./send.model";

@Injectable({
    providedIn: 'root'
})
export class HeroSalaryPaymentNotificationService {

    private notifSubject = new Subject<PaymentNotification>();
    
    sendPayment(heroID:number, message:string, salary: number) {
        const notificationPayment:PaymentNotification = { heroID, message, salary};

        this.notifSubject.next(notificationPayment);
    }

    getNotification(): Observable<PaymentNotification> {
        return this.notifSubject.asObservable();
    }
}