import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamescreenPage } from './gamescreen.page';

const routes: Routes = [
  {
    path: '',
    component: GamescreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamescreenPageRoutingModule {}
