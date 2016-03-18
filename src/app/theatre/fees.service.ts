import {Injectable} from 'angular2/core';

import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class FeeService {

    public feeMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    calculateFees(): number {
        return this.feeMode.getValue() ? 25 : 0;
    }
}