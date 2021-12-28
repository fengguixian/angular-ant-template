import { Component, OnInit } from '@angular/core';
import { sideMenuRoutes } from 'src/app/configs/routes';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SimpleReuseStrategy } from 'src/app/utils/SimpleReuseStrategy';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [SimpleReuseStrategy]
})
export class LayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  isCollapsed: boolean = false;
  menus = sideMenuRoutes;

  ngOnInit(): void {
  }

  onMenuClick(e: Event): void {
    console.log(e);
  }

  logout() : void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
