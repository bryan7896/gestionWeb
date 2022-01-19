import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
    ApiError = '[global] ApiError',
    setContador = '[global] setContador',
    getContador = '[global] getContador',
}


export class ApiError implements Action {
    readonly type = ActionTypes.ApiError;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export class setContador implements Action {
    readonly type = ActionTypes.setContador;
    constructor(public payload: { contador: any }) { }
}

export class getContador implements Action {
    readonly type = ActionTypes.getContador;
}


export type actions =
    ApiError
    | setContador