import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuTabComponent } from './components/menu-tab/menu-tab.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [HeaderComponent, MenuTabComponent, FilterComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [HeaderComponent, MenuTabComponent, FilterComponent]
})
export class SharedModule {}
