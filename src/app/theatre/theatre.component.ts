import {Component, Input} from 'angular2/core';
import {range} from 'lodash';
import {TheatreRowComponent} from "./theatreRow.component.ts";

@Component({
    selector: 'theatre',
    template: require('../views/theatre.html'),
    directives: [TheatreRowComponent]
})
export class TheatreComponent {

    @Input() rows: Array<number> = range(8);

    constructor() {
    }
}