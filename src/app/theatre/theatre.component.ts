import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren} from 'angular2/core';

import {FeeService} from "./fees.service.ts";
import {TicketService} from "./tickets.service.ts";

import {SeatComponent} from './seat.component.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";

@Component({
    selector: 'theatre',
    template: require('../views/theatre.html'),
    directives: [TheatreRowComponent],
    pipes: [ToArrayPipe],
    styles: [require('../../assets/theatre.css')],
    providers: [TicketService, FeeService]
})
export class TheatreComponent implements AfterViewInit {

    @ViewChildren(TheatreRowComponent) rowComponents: QueryList<TheatreRowComponent>;

    rows: Array<number> = [];
    sales: number = 0.0;

    constructor(private _changeDetectionRef : ChangeDetectorRef,
                ticketService: TicketService,
                private feeService: FeeService) {
        ticketService.ticketSales.subscribe(salesValue => this.sales = salesValue);
    }

    /**
     * Fires after the View is initialized (basically translates to components nested within this one but not necessarily
     * their children). This fires after contentInit which occurs when nested non-components (eg, pure HTML) is initialized.
     */
    ngAfterViewInit() {
        this.feeService.feeMode.subscribe(() => {
            this.calculateTheatrePrices();
        });

        this.rowComponents.changes.subscribe(() => {
            this.calculateTheatrePrices();
        });

        // AfterViewInit is spawned by the ChangeDetection cycle - since we're modifying bound
        // variables and other state we need to hint to Angular that it needs to re-run change
        // detection here.
        this._changeDetectionRef.detectChanges();
    }

    /**
     * Iterate all seats in the theatre and recalculate prices
     */
    private calculateTheatrePrices() {
        this.rowComponents.forEach(row => {
            row.seats.forEach(seat => {
                seat.calculatePrice();
            });
        });
    }

    addRow() {
        this.rows.push(this.rows.length);
    }

    removeRow() {
        this.rows.splice(this.rows.length - 1, 1);
    }

    set feeMode(value: boolean) {
        this.feeService.feeMode.next(value);
    }

    get feeMode(): boolean {
        return this.feeService.feeMode.getValue();
    }
}