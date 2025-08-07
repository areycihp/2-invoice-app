import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { InvoiceModel } from '../models/invoice-model';
import { reduce } from 'rxjs';
import { Invoice } from '../components/invoice/invoice';

@Injectable({
  providedIn: 'root'
})
export class Item {
  private invoice: InvoiceModel = invoiceData;
  
  constructor(){}

  getInvoice(): InvoiceModel{
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  remove(id: number): InvoiceModel {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  save(item: any): InvoiceModel {
    this.invoice.items = [... this.invoice.items, item];
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  calculateTotal(){
    // let total = 0;
    // this.invoice.items.forEach(item => {
    //   total += (item.price * item.quantity);
    // });
    // return total;
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity),0);
  }
}
