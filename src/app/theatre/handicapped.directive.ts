import {Directive} from 'angular2/core';
import {SeatComponent} from "./seat.component.ts";
import {ReservedSeatDirective} from "./reservedSeat.directive.ts";
import {HANDICAPPED_OUTLINE_COLOR} from './constants.ts';

@Directive({
    selector: '[handicapped]'
})
export class HandicappedDirective extends ReservedSeatDirective {

    constructor(public seat: SeatComponent) {
        super(HANDICAPPED_OUTLINE_COLOR, seat);
    }
}
