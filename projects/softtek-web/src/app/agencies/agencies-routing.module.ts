import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies.component';
import { AgenciesResolver } from './agencies.resolver';

const routes: Routes = [
  { path: '', component: AgenciesComponent, resolve: { agencies: AgenciesResolver } },
  { path: 'new', loadChildren: () => import('./new/new.module').then(m => m.NewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
