import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getContador } from './config/global.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>,
  ) { }

  state$: Observable<any> = this.store.select(state => state);

  ngOnInit() {
    console.log('hola')
    this.store.dispatch(new getContador())

    this.state$.subscribe((state) => {
      console.log(state)
    })
  }
}
