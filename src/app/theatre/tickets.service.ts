import {Injectable} from 'angular2/core';

import {SeatComponent} from "./seat.component.ts";
import {BASE_TICKET_PRICE} from './constants.ts';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class TicketService {

    public static TICKET_SALES: BehaviorSubject<number> = new BehaviorSubject(0.0);

    /**
     * Calculates the price of a given {@link SeatComponent} based on its relative position in the Theatre.
     * @param seat
     * @returns {number}
     */
    calculateTicketPrice(seat: SeatComponent ): number {
        return Math.round(BASE_TICKET_PRICE - BASE_TICKET_PRICE * seat.theatreRow.rowNumber / seat.theatre.rows.length + seat.getSeatNumber());

    }

    sellTicket(seat: SeatComponent) {
        TicketService.TICKET_SALES.next(TicketService.TICKET_SALES.getValue() + seat.price);
    }
}