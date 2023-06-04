import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuTabComponent, 
    FilterComponent, 
    PaginationComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [
    HeaderComponent, 
    MenuTabComponent, 
    FilterComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
