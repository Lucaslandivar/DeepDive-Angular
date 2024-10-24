import { Component } from '@angular/core';
import { NewTicketsComponent } from './new-tickets/new-tickets.component';
import { Ticket } from './ticket/ticket.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketsComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }
}
