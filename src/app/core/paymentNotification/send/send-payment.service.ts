import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { PaymentNotif } from "./payment.model";

@Injectable({
    providedIn: 'root'
})
export class HeroSalaryPaymentNotificationService {

    private notifSubject = new Subject<PaymentNotif>();
    
    sendPayment(heroID:number, message:string, salary: number) {
        const notificationPayment:PaymentNotif = { heroID, message, salary};

        this.notifSubject.next(notificationPayment);
    }

    getNotification(): Observable<PaymentNotif> {
        return this.notifSubject.asObservable();
    }
}