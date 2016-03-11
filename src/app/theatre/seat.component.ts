import {Component, Input} from 'angular2/core';

import {ReservedDirective} from './reserved.directive.ts';

@Component({
    selector: 'seat',
    template: require('../views/seat.html'),
    directives: [ReservedDirective]
})
export class SeatComponent {

    @Input() seatNumber: number;

    constructor() {
    }
}