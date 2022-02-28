import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncWrapperComponent } from './sync-wrapper.component';

describe('SyncWrapperComponent', () => {
  let component: SyncWrapperComponent;
  let fixture: ComponentFixture<SyncWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
