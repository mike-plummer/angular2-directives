import {Component, Input} from 'angular2/core';

import {SeatComponent} from "./seat.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";

@Component({
    selector: 'theatre-row',
    template: require('../views/theatreRow.html'),
    directives: [SeatComponent],
    pipes: [ToArrayPipe]
})
export class TheatreRowComponent {

    @Input() rowNumber: number;

    constructor() {
    }
}