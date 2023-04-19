import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date :any = new Date();
  copyright :String = `All Rights Reserved ${this.date.getFullYear()} ©`
}
