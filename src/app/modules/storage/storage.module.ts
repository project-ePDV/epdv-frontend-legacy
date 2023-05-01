import { NgModule } from '@angular/core';

import { StorageRoutingModule } from './storage-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoragePage } from './pages/storage/storage.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoragePage
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class StorageModule { }
