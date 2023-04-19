import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  header: string = "header";
  @Input () header_about: string = "";
    // Logica del Read More de mi portfolio

}
