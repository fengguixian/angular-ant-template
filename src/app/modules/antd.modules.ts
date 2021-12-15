import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import {
    UserOutline,
    LockOutline,
    DashboardFill,
    GoldFill,
    AppleFill,
    AndroidFill,
    InfoCircleFill,
    TaobaoCircleFill
  } from '@ant-design/icons-angular/icons';

  const icons = [
    UserOutline, 
    LockOutline, 
    DashboardFill, 
    GoldFill, 
    AppleFill, 
    AndroidFill, 
    InfoCircleFill,
    TaobaoCircleFill
  ];

@NgModule({
  exports: [
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class AntdModules {
}