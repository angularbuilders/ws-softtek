import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgenciesList } from './agencies/agencies.list';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TripsList } from './trips/trips.list';

@NgModule({
  declarations: [HomeComponent, AgenciesList, TripsList],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
