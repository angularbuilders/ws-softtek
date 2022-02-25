import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncWrapperComponent } from './async-wrapper/async-wrapper.component';

@NgModule({
  declarations: [AsyncWrapperComponent],
  imports: [CommonModule],
  exports: [AsyncWrapperComponent],
})
export class SharedModule {}
