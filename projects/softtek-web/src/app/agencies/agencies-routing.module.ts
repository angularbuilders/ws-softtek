import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '../core/authenticated.guard';
import { AgenciesComponent } from './agencies.component';
import { AgenciesResolver } from './agencies.resolver';
import { NewGuard } from './new.guard';

const routes: Routes = [
  { path: '', component: AgenciesComponent, resolve: { agencies: AgenciesResolver } },
  {
    path: 'new',
    canLoad: [AuthenticatedGuard],
    canActivate: [NewGuard],
    canDeactivate: [NewGuard],
    loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
