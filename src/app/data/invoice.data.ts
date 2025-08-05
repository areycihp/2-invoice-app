import { InvoiceModel } from "../models/invoice-model";

export const invoiceData: InvoiceModel = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 1231231,
    },
    items: [
        {
        id: 1,
        product: 'CPU Intel i9',
        price: 599,
        quantity: 1
    },
    {
        id: 2,
        product: 'Corsair Teclado Mecanico',
        price: 399,
        quantity: 2
    },
    {
        id: 3,
        product: 'Monitor Asus',
        price: 799,
        quantity: 5
    }
    ]

}