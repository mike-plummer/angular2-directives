import {Component, Input, Query, QueryList} from 'angular2/core';

import {TheatreRowComponent} from "./theatreRow.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";
import {TicketService} from "./tickets.service.ts";
import {forwardRef} from "angular2/core";
import {Inject} from "angular2/core";
import {ViewChildren} from "angular2/core";

@Component({
    selector: 'theatre',
    template: require('../views/theatre.html'),
    directives: [TheatreRowComponent],
    pipes: [ToArrayPipe]
})
export class TheatreComponent {

    @ViewChildren(TheatreRowComponent) rows: QueryList<TheatreRowComponent>;

    constructor() {
        console.log('Building a Theatre!');
    }

    ngAfterViewInit() {
        this.rows.changes.subscribe(() => console.log(`I see ${this.rows.length} items`));
    }
}