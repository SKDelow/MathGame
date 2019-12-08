import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamescreenPageRoutingModule } from './gamescreen-routing.module';

import { GamescreenPage } from './gamescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamescreenPageRoutingModule
  ],
  declarations: [GamescreenPage]
})
export class GamescreenPageModule {}
