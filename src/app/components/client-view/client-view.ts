import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  imports: [],
  templateUrl: './client-view.html'
})
export class ClientView {
  @Input() client!: Client;

}
