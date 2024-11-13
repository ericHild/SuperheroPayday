/**
 * Définition de l'interface commune.
 * Cette interface sera le contrat que devra implémenter toutes les autres méthodes / types de notifications
 */
export interface PaymentNotificationInterfaceStrategy {
    
    sendPaymentNotification(heroID: number, message: string, salary: number): void;

}