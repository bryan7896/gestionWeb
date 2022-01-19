import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TRANSITION } from '../../../../app.animation';
import { Store } from '@ngrx/store';

@Component({
  selector: 'elastic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private store$: Store
  ) { }

  ngOnInit() {
    console.log('-/*/***/')
  }

}
