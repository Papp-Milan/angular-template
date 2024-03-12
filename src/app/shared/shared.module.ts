import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

var modules = [
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule { }