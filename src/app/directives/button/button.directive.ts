import { Directive, HostBinding, Input } from "@angular/core";


type buttonPalette = 'primary' | 'secondary' | 'tertiary'; // A changer en fonction du héros

@Directive({
    selector: '[heroButton]',
    standalone: true
})
export class HeroButtonDirective {

    @Input() apparence!: buttonPalette;

    // PRIMARY & SECONDARY
    @HostBinding('class.hero-btn--primary') get isPrimary():boolean { return this.apparence === 'primary' };
    @HostBinding('class.hero-btn--secondary') get isSecondary():boolean { return this.apparence === 'secondary' };
}