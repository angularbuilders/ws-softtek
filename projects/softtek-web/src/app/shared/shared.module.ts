import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncWrapperComponent } from './async-wrapper/async-wrapper.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { SyncWrapperComponent } from './sync-wrapper/sync-wrapper.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [AsyncWrapperComponent, LoadingComponent, ErrorComponent, SyncWrapperComponent, EmptyComponent],
  imports: [CommonModule],
  exports: [AsyncWrapperComponent, LoadingComponent, ErrorComponent, SyncWrapperComponent, EmptyComponent],
})
export class SharedModule {}
