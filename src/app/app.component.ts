import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasDrawerComponent } from './offcanvas-drawer/offcanvas-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private readonly offcanvasService: NgbOffcanvas) {}

  closeThenOpenDrawer() {
    this.offcanvasService.dismiss();
    this.offcanvasService.open(OffcanvasDrawerComponent, {
      backdrop: false,
      position: 'bottom'
    })
  }

}
