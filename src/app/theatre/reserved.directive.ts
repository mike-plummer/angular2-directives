import {Directive} from 'angular2/core';

@Directive({
    selector: '[reserved]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'oneMouseLeave()'
    }
})
export class ReservedDirective {
    constructor() {
    }

    onMouseEnter() {
        // TODO Add tooltip
    }

    oneMouseLeave() {
        // TODO Hide tooltip
    }
}