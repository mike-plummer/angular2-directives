import {AfterViewInit, Component, ElementRef, forwardRef, Inject, Renderer} from 'angular2/core';

import {FeeService} from "./fees.service.ts";
import {TicketService} from './tickets.service.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {TheatreComponent} from "./theatre.component.ts";
import {DEFAULT_FILL_COLOR, DEFAULT_OUTLINE_COLOR, RESERVED_COLOR} from "./constants.ts";

@Component({
    selector: 'seat',
    template: require('../views/seat.html'),
    styles: [require('../../assets/tooltip.css')],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'oneMouseLeave()'
    }
})
export class SeatComponent {

    soldPrice: number;
    tooltip: string;
    outlineColor: string = DEFAULT_OUTLINE_COLOR;
    fillColor: string = DEFAULT_FILL_COLOR;

    constructor(@Inject(forwardRef(() => TheatreComponent)) public theatre: TheatreComponent,
                @Inject(forwardRef(() => TheatreRowComponent)) public theatreRow: TheatreRowComponent,
                private _ticketService: TicketService,
                private _feeService: FeeService,
                private element: ElementRef,
                private renderer: Renderer) {
        _feeService.feeMode.subscribe(enabled => {
            if (enabled && theatreRow.rowNumber > 1) {
                this.fillColor = RESERVED_COLOR;
            } else if (!this.soldPrice) {
                this.fillColor = DEFAULT_FILL_COLOR;
            }
        })
    }

    getSeatNumber() {
        return this.theatreRow.seats.toArray().indexOf(this);
    }

    calculatePrice() {
        if (!this.soldPrice) {
            let ticketPrice: number = this._ticketService.calculateTicketPrice(this);
            let fees: number = this._feeService.calculateFees();
            this.tooltip = `Available\n\n -Ticket:\t${ticketPrice}\n -Fees:\t${fees}`;
        }
    }

    onClick() {
        if (!this.soldPrice) {
            this.soldPrice = this._ticketService.sellTicket(this);
            this.tooltip = `Sold: ${this.soldPrice}`;
            this.fillColor = RESERVED_COLOR;
        }
    }

    onMouseEnter() {
        this.renderer.setElementStyle(this.element.nativeElement, 'border-bottom', '5px solid black');
    }

    oneMouseLeave() {
        this.renderer.setElementStyle(this.element.nativeElement, 'border-bottom', null);
    }
}