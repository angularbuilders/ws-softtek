import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'stk-web-trips',
  templateUrl: './trips.list.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsList implements OnInit {
  @Input() trips: Trip[] = [];
  constructor() {}

  ngOnInit(): void {}
}
