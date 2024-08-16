import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShowHideComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
}
