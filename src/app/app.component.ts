import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { CarouselComponent } from "./ui/carousel/carousel.component";
import { AboutComponent } from "./pages/about/about.component";
import { StatesComponent } from "./pages/states/states.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StatesProj';
  

}
