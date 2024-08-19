import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-hide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-hide.component.html',
  styleUrl: './show-hide.component.css'
})
export class ShowHideComponent {
  showValueString : boolean = false;
  showValue(action : string) : void{
    this.showValueString = action === 'show';
  }

}
