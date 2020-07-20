import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Rfid} from '../rfid';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-rfid',
  templateUrl: './create-rfid.component.html',
  styleUrls: ['./create-rfid.component.css']
})
export class CreateRfidComponent implements OnInit {
  customers: Observable<Customer[]>;

  rfid: Rfid = new Rfid();
  submitted = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  newCustomer(): void {
    this.submitted = false;
    this.rfid = new Rfid();
  }

  save() {
    this.submitted = true;
    this.customerService.createRfid(this.rfid)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.rfid = new Rfid();
  }

  onSubmit() {
    this.save();
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
    console.log(this.customers);
  }

}
