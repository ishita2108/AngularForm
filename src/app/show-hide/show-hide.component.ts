import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  standalone: true,
  imports: [],
  templateUrl: './show-hide.component.html',
  styleUrl: './show-hide.component.css'
})
export class ShowHideComponent {
  showValueString:string ="";
  showValue(){
    this.showValueString ="Hello, Welcome to Angular Training";
  }
  hideValue(){
    this.showValueString ="";
  }

}
