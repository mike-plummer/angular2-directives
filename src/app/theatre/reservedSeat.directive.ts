import {SeatComponent} from "./seat.component.ts";

export class ReservedSeatDirective {

    constructor(outlineColor: string, seat: SeatComponent) {
        seat.outlineColor = outlineColor;
    }
}