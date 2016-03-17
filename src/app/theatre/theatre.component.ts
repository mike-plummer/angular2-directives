import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren} from 'angular2/core';

import {SeatComponent} from './seat.component.ts';
import {TheatreRowComponent} from "./theatreRow.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";
import {TicketService} from "./tickets.service.ts";

@Component({
    selector: 'theatre',
    template: require('../views/theatre.html'),
    directives: [TheatreRowComponent],
    pipes: [ToArrayPipe],
    styles: [require('../../assets/theatre.css')],
    viewProviders: [TicketService]
})
export class TheatreComponent implements AfterViewInit{

    @ViewChildren(TheatreRowComponent) public rowComponents: QueryList<TheatreRowComponent>;

    public rows: Array<number> = [];
    public sales: number = 0.0;

    constructor(private _changeDetectionRef : ChangeDetectorRef) {
        TicketService.ticketSales.subscribe(salesValue => this.sales = salesValue);
    }

    ngAfterViewInit() {
        this.calculateTheatrePrices();

        this.rowComponents.changes.subscribe(data => {
            this.calculateTheatrePrices();
        });

        // AfterViewInit is spawned by the ChangeDetection cycle - since we're modifying bound
        // variables and other state we need to hint to Angular that it needs to re-run change
        // detection here.
        this._changeDetectionRef.detectChanges();
    }

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
}