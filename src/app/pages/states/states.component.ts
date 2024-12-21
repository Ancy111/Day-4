import { Component, Input } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [CardsComponent, NavbarComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
 constructor(public api:ApiService){}
}
