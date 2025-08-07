import { Component, Input } from '@angular/core';

@Component({
  selector: 'total',
  imports: [],
  templateUrl: './total.html'
})
export class Total {
  @Input() total!: number;
}
