import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import {CreateRfidComponent} from './create-rfid/create-rfid.component';
import {ListRfidComponent} from './list-rfid/list-rfid.component';
import {TemperaturasComponent} from './temperaturas/temperaturas.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'addRfid', component: CreateRfidComponent },
    { path: 'listRfid', component: ListRfidComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    { path: 'temperaturas', component: TemperaturasComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
