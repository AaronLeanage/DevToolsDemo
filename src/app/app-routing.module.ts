import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
  },
  {
    path: 'options',
    component: OptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
