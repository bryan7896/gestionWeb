import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, EffectNotification, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, exhaustMap, catchError, concatMap, switchMap, delay, take, takeUntil } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { ActionTypes, setContador } from './global.action';

@Injectable()

export class GeneralEffects {
    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        //private router: Router,
        private store$: Store,
    ) { }

    getContador$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.getContador),
            exhaustMap(() => {
                const userInfo = localStorage.getItem("userInfo");
                console.log('userInfo-->', userInfo)
                return [new setContador({ contador: {} })]
                /* return this.apiService.get().pipe(
                    map(response => {
                        return new setContador({ contador: response })
                    })
                ); */
            })
        ), {});
}

export const effects = [
    GeneralEffects,
];