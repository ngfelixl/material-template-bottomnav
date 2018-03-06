import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenav = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.sidenav.emit(true);
  }

}
