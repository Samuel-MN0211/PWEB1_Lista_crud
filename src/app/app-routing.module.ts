import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/animais', pathMatch: 'full' },
  { path: 'animais', component: AppComponent }, // Rota principal
  { path: 'animais/:nome/:tipo', component: AppComponent }, // Rota com parâmetros
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
