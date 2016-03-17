import {AfterViewInit, Component, ElementRef, forwardRef, Host, Inject, Input, Optional, Renderer} from 'angular2/core';

import {TicketService} from './tickets.service.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {TheatreComponent} from "./theatre.component.ts";
import {DEFAULT_OUTLINE_COLOR, RESERVED_COLOR} from "./constants.ts";

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

    price: number;
    tooltip: string;
    outlineColor: string = DEFAULT_OUTLINE_COLOR;

    constructor(@Inject(forwardRef(() => TheatreComponent)) public theatre: TheatreComponent,
                @Inject(forwardRef(() => TheatreRowComponent)) public theatreRow: TheatreRowComponent,
                private _ticketService: TicketService,
                private element: ElementRef,
                private renderer: Renderer) {
    }

    getSeatNumber() {
        return this.theatreRow.seats.toArray().indexOf(this);
    }

    calculatePrice() {
        this.price = this._ticketService.calculateTicketPrice(this);
        this.tooltip = `Available: ${this.price}`
    }

    onClick() {
        this._ticketService.sellTicket(this);
        this.tooltip = 'Sold';
        this.renderer.setElementStyle(this.element.nativeElement, 'backgroundColor', RESERVED_COLOR);

        let replacement = function(){
            console.log('Already sold!');
        };
        this.onClick = replacement;
        this.calculatePrice = replacement;
    }

    onMouseEnter() {
        this.renderer.setElementStyle(this.element.nativeElement, 'border-bottom', '5px solid black');
    }

    oneMouseLeave() {
        this.renderer.setElementStyle(this.element.nativeElement, 'border-bottom', null);
    }
}