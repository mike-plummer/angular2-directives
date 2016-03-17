import {Component, Input, QueryList, ViewChildren} from 'angular2/core';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from "angular2/common";

import {SeatComponent} from "./seat.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";
import {HandicappedDirective} from "./handicapped.directive.ts";
import {VipDirective} from "./vip.directive.ts";

@Component({
    selector: 'theatre-row',
    template: require('../views/theatreRow.html'),
    directives: [SeatComponent, HandicappedDirective, VipDirective, NgSwitch, NgSwitchWhen, NgSwitchDefault],
    pipes: [ToArrayPipe]
})
export class TheatreRowComponent {

    @Input() rowNumber: number;

    @ViewChildren(SeatComponent) seats: QueryList<SeatComponent>;

    constructor() {
    }
}