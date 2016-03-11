import {Component, Input} from 'angular2/core';
import {range} from 'lodash';
import {SeatComponent} from "./seat.component.ts";

@Component({
    selector: 'theatre-row',
    template: require('../views/theatreRow.html'),
    directives: [SeatComponent]
})
export class TheatreRowComponent {

    @Input() rowNumber: number;

    @Input() seats: Array<number> = range(10);

    constructor() {
    }
}