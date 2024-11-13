# Problématique
Les RH souhaitent envoyer une notification au salariés (les super-heros) que leurs salaire à été envoyé.
Il y a pour cela diffférents cannaux de communications : alert, SMS, mail.
Il me fallait une solution me permettant de pouvoir envoyer la notification, mais également de pouvoir ajouter ou choisir
comment envoyer cette notification

# Volonté
Utiliser dans les principes S.O.L.I.D le : O ===> Open / Close

# Solution
Mes recherches m'ont menées sur l'utilisation du design pattern Strategy couplé au principe Open / Close 

# Le découpage

##  A : Définir une interface de stratégie de notification : PaymentNotificationInterfaceStrategy {}

Cette interface va contenir une méthode sendPaymentNotification();
Elle obligera toutes les autres stratégies (les autres moyens de communications) à l'implémenter.
Ils pourront ensuite la redéfinir comme ils le souhaitent.

## B : Créer les stratégies de notification : Alert, SMS, Mail

Ces classes vont implémenter l'interface <code>PaymentNotificationInterfaceStrategy{}</code>
et définir la manière spécifique de diffusion.

## C : Définition du service principale qui va surtout nous permettre de choisir la stratégie en fonction de notre besoin

Ici c'est notre <code>Context</code>.
Il sera responsable de choisir la stratégie de communication et surtout de publier la notification dans le <code>Subject</code>
Qui dit publication dit récupération donc : 
* <code>setNotifSubjectPayment() {}</code>
* <code>getNotifSubjectPayment() {}</code>

Egalement d'une méthode <code>execute</code> qui elle va renvoyer les éléments via la statégie choisie