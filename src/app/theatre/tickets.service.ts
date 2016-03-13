import {Injectable} from 'angular2/core';

import {SeatComponent} from "./seat.component.ts";
import {BASE_TICKET_PRICE} from './constants.ts';

@Injectable()
export class TicketService {

    /**
     * Calculates the price of a given {@link SeatComponent} based on its relative in the Theatre.
     * @param seat
     * @returns {number}
     */
    calculateTicketPrice(seat: SeatComponent ): number {
        return BASE_TICKET_PRICE - BASE_TICKET_PRICE * seat.theatreRow.rowNumber / seat.theatre.rows.length;
    }
}