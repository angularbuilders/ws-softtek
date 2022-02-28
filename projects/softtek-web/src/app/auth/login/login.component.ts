import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'stk-web-login',
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log({ returnUrl });
    this.router.navigateByUrl(returnUrl);
  }
}
