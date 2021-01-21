import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  name: string = "Luis Miguel";
  surname: string = "Ortiz Rozalén";

  constructor() {
  }

  ngOnInit(): void {
  }

}
