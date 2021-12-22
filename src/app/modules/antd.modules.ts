import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';

import {
  UserOutline,
  LockFill,
  LockOutline,
  DashboardFill,
  GoldFill,
  AppleFill,
  AndroidFill,
  InfoCircleFill,
  TaobaoCircleFill,
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  UserOutline, 
  LockFill,
  LockOutline, 
  DashboardFill, 
  GoldFill, 
  AppleFill, 
  AndroidFill, 
  InfoCircleFill,
  TaobaoCircleFill,
  MenuFoldOutline,
  MenuUnfoldOutline
];

@NgModule({
  exports: [
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzPopoverModule,
    NzTableModule,
    NzDividerModule,
    NzCardModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class AntdModules {
}