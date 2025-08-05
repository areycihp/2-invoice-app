import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { InvoiceModel } from '../models/invoice-model';

@Injectable({
  providedIn: 'root'
})
export class Item {
  private invoice: InvoiceModel = invoiceData;
  
  constructor(){}

  getInvoice(): InvoiceModel{
    return this.invoice;
  }
}
