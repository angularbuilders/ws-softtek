import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '../core/models/agency';

@Component({
  selector: 'stk-web-agencies',
  templateUrl: './agencies.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesComponent implements OnInit {
  public agencies: Agency[];

  constructor(private route: ActivatedRoute) {
    this.agencies = this.route.snapshot.data['agencies'];
  }

  ngOnInit(): void {}
}
