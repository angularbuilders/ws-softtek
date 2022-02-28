import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'stk-web-sync-wrapper',
  templateUrl: './sync-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncWrapperComponent implements OnInit {
  @Input() dataTemplate!: TemplateRef<any>;
  @Input() dataName: string = '';
  @Input() data: unknown[] = [];
  constructor() {}

  ngOnInit(): void {}
}
