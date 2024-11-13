import { Observable, Subject } from "rxjs";
import { PaymentNotif } from "../../../shared/models/payment.model";
import { AlertNotificationStrategy } from "./alertNotificationStrategy";
import { PaymentNotificationInterfaceStrategy } from "./paymentNotificationInterfaceStrategy";

/**
 * Cette classe pour but d'utiliser la PaymentNotificationInterfaceStrategy.
 * On va ici y faire une référence et initinier un mode de notification par défaut.
 */
export class PaymentNotificationContextService {    

    private strategy: PaymentNotificationInterfaceStrategy; // Référence à notre interface

    private paymentNotifSubject$ = new Subject<PaymentNotif>();

    constructor() {
        this.strategy = new AlertNotificationStrategy(this);
    }

    // Permet de changer la statégie
    setStrategy(strategy: PaymentNotificationInterfaceStrategy): void {
        this.strategy = strategy;
    }
    
    // Envoie la notification via la stratégie choisie
    executePayment(heroID: number, message: string, salary: number): void {
        this.strategy.sendPaymentNotification(heroID, message, salary);
    }
    
    // Pour notifier l'envoi du paiement
    setNotifSubjectPayment(data: PaymentNotif) {
        this.paymentNotifSubject$.next(data);
    }
    
    // Permet d'obtenir les notifications sous forme d'Observable
    getNotifSubjectPayment(): Observable<PaymentNotif> {
        return this.paymentNotifSubject$.asObservable();
    }
}