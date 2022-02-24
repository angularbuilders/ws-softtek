import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stk-web-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public operators: any[] = [];
  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.operators = this.route.snapshot.data['operators'];
  }
}
