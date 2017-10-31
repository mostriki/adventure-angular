import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {
   path: '',
   component: AppComponent
 },
  {
     path: 'games/:id',
     component: GameComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
