import {Component, forwardRef, Host, Inject, Input, Optional, SkipSelf} from 'angular2/core';

import {TicketService} from './tickets.service.ts';
import {ReservedDirective} from './reserved.directive.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {TheatreComponent} from "./theatre.component.ts";

@Component({
    selector: 'seat',
    template: require('../views/seat.html'),
    directives: [ReservedDirective],
    providers: [TicketService],
    styles: [require('../../assets/tooltip.css')]
})
export class SeatComponent {

    @Input() seatNumber: number;
    public price: number;

    constructor(@Inject(forwardRef(() => TheatreComponent)) public theatre: TheatreComponent,
                @Inject(forwardRef(() => TheatreRowComponent)) public theatreRow: TheatreRowComponent,
                @Optional() public reserved: ReservedDirective,
                private _ticketService: TicketService) {
    }

    onClick() {
        this.price = this._ticketService.calculateTicketPrice(this);
    }
}