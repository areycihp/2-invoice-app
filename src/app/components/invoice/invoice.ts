import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { InvoiceModel } from '../../models/invoice-model';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html'
})
export class Invoice implements OnInit{
  invoice!: InvoiceModel;
  constructor(private service: Item){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
