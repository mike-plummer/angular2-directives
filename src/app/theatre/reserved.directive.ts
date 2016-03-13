import {Directive} from 'angular2/core';
import {SeatComponent} from "./seat.component.ts";

@Directive({
    selector: '[reserved]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'oneMouseLeave()'
    }
})
export class ReservedDirective {
    constructor(public seat: SeatComponent) {
    }

    onMouseEnter() {
        // TODO Add tooltip
    }

    oneMouseLeave() {
        // TODO Hide tooltip
    }
}