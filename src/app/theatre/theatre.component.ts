import { ChangeDetectorRef, Component, QueryList, ViewChildren} from 'angular2/core';

import {SeatComponent} from './seat.component.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";
import {forwardRef} from "angular2/core";
import {TicketService} from "./tickets.service.ts";

@Component({
    selector: 'theatre',
    template: require('../views/theatre.html'),
    directives: [TheatreRowComponent],
    pipes: [ToArrayPipe],
    providers: [TicketService]
})
export class TheatreComponent {

    @ViewChildren(forwardRef(() => TheatreRowComponent)) rows: QueryList<TheatreRowComponent>;

    public sales: number = 0.0;

    constructor(private _ticketService: TicketService,
                private _changeDetectionRef : ChangeDetectorRef) {
        TicketService.ticketSales.subscribe(salesValue => this.sales = salesValue);
    }

    ngAfterViewInit() {
        this.rows.forEach(row => {
            row.seats.forEach(seat => {
                seat.calculatePrice();
            });
        });

        // AfterViewInit is spawned by the ChangeDetection cycle - since we're modifying bound
        // variables and other state we need to hint to Angular that it needs to re-run change
        // detection here.
        this._changeDetectionRef.detectChanges();
    }
}