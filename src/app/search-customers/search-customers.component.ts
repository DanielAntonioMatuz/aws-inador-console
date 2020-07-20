import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  id: number;
  // tslint:disable-next-line:ban-types
  customers: Object;

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.id = 0;
  }

  private searchCustomers() {
    this.customers = [];
    this.dataService.getCustomer(this.id)
      .subscribe(customers => this.customers = customers);
    console.log(this.id);
  }

  onSubmit() {
    this.searchCustomers();
  }

}
