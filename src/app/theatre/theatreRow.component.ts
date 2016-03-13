import {Component, forwardRef, Input, QueryList, ViewChildren} from 'angular2/core';

import {SeatComponent} from "./seat.component.ts";
import {ToArrayPipe} from "./toArray.pipe.ts";
import {NgSwitch} from "angular2/common";
import {NgSwitchWhen} from "angular2/common";
import {NgSwitchDefault} from "angular2/common";
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

    @ViewChildren(forwardRef(() => SeatComponent)) seats: QueryList<SeatComponent>;

    constructor() {
    }
}