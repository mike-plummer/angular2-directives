import {Component} from 'angular2/core';
import {AssignmentComponent} from "./assignment.component.ts";
@Component({
    selector: 'employee',
    template: require('../views/employee.html'),
    directives: [AssignmentComponent]
})
export class EmployeeComponent {
    constructor() {
    }
}