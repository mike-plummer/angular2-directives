// import {Injectable} from 'angular2/core';
//
// import {SeatComponent} from "./seat.component.ts";
// import {BASE_TICKET_PRICE} from './constants.ts';
// import {BehaviorSubject} from "rxjs/Rx";
// import {FeeService} from "./fees.service.ts";
//
// @Injectable()
// export class TicketService {
//
//     public ticketSales: BehaviorSubject<number> = new BehaviorSubject(0.0);
//
//     constructor(private _feeService: FeeService) {
//     }
//
//     /**
//      * Calculates the price of a given {@link SeatComponent} based on its relative position in the Theatre.
//      * @param seat
//      * @returns {number}
//      */
//     calculateTicketPrice(seat: SeatComponent): number {
//         let rowCount = seat.theatre.rows.length;
//         let rowNumber = seat.theatreRow.rowNumber;
//         return Math.round(BASE_TICKET_PRICE * ((rowCount - rowNumber) / rowCount) + seat.getSeatNumber());
//     }
//
//     /**
//      * Add cost of seat to total sales.
//      * @param seat Seat to sell ticket for
//      * @returns {number} total ticket price (incl. fees) for the seat
//      */
//     sellTicket(seat: SeatComponent): number {
//         let totalPrice = this.calculateTicketPrice(seat) + this._feeService.calculateFees();
//         this.ticketSales.next(this.ticketSales.getValue() + totalPrice);
//         return totalPrice;
//     }
// }