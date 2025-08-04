import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invoice } from './components/invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Invoice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2-invoice-app');
}
