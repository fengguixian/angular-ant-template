import { Component, OnInit } from '@angular/core';
import { sideMenuRoutes } from 'src/app/configs/routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  isCollapsed: boolean = false;
  menus = sideMenuRoutes;

  ngOnInit(): void {
  }

  onMenuClick(e: Event): void {
    console.log(e);
  }
}
