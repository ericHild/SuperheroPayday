import { Observable, Subject } from "rxjs";
import { PaymentNotificationInterfaceStrategy } from "./paymentNotificationInterfaceStrategy";
import { PaymentNotif } from "../../../shared/models/payment.model";
import { PaymentNotificationContextService } from "./paymentNotificationContextService";

export class AlertNotificationStrategy implements PaymentNotificationInterfaceStrategy {

    constructor(private paymentNotifContextService: PaymentNotificationContextService) {}

    sendPaymentNotification(heroID: number, message: string, salary: number): void {

        //Objet notification 
        const data:PaymentNotif = { heroID, message, salary };

        // Publication de la notification dans le Subject
        this.paymentNotifContextService.setNotifSubjectPayment(data);

        console.log('🚨 Notification simulation : Alert 🚨');
        console.log(`🚨 Sending Alert : HeroID = ${heroID}, Message = ${message}, Salary = ${salary}`);
    }
}