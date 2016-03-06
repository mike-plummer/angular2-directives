import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {EmployeeComponent} from "./employee.component.ts"

@Component({
    selector: 'company',
    template: require('../views/company.html'),
    directives: [EmployeeComponent],
    providers: [HTTP_PROVIDERS]
})
export class CompanyComponent {}