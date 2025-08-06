import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { InvoiceModel } from '../../models/invoice-model';
import { InvoiceView } from '../invoice-view/invoice-view';
import { ClientView } from '../client-view/client-view';
import { CompanyView } from '../company-view/company-view';
import { ListItems } from '../list-items/list-items';

@Component({
  selector: 'app-invoice',
  imports: [
    InvoiceView,
    ClientView,
    CompanyView,
    ListItems,
  ],
  templateUrl: './invoice.html'
})
export class Invoice implements OnInit{
  invoice!: InvoiceModel;
  constructor(private service: Item){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
