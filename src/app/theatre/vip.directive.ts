import {Directive, Inject} from 'angular2/core';

import {SeatComponent} from "./seat.component.ts";
import {ReservedSeatDirective} from "./reservedSeat.directive.ts";
import {VIP_OUTLINE_COLOR} from './constants.ts';

@Directive({
    selector: '[vip]'
})
export class VipDirective extends ReservedSeatDirective {

    constructor(@Inject(SeatComponent) seat: SeatComponent) {
        super(VIP_OUTLINE_COLOR, seat);
    }
}
