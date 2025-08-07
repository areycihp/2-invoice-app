import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { InvoiceModel } from '../../models/invoice-model';
import { InvoiceView } from '../invoice-view/invoice-view';
import { ClientView } from '../client-view/client-view';
import { CompanyView } from '../company-view/company-view';
import { ListItems } from '../list-items/list-items';
import { Total } from '../total/total';
import { FormItem } from '../form-item/form-item';

@Component({
  selector: 'app-invoice',
  imports: [
    InvoiceView,
    ClientView,
    CompanyView,
    ListItems,
    Total,
    FormItem,
  ],
  templateUrl: './invoice.html'
})
export class Invoice implements OnInit{
  invoice!: InvoiceModel;
  constructor(private service: Item){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  addItem(item: Item){
    this.invoice = this.service.save(item);
  }

  removeItem(id: number){
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    this.invoice = this.service.remove(id);
  }
  
}
