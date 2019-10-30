import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { CakeService } from "../../services/cake.service";

@Injectable()
export class CakeEffects {
  constructor(private actions$: Actions, private cakeService:CakeService) {}

  loadCakes$ =  createEffect(() =>
  this.actions$.pipe(
    ofType('[Cakes] load'),
    mergeMap(() => this.cakeService.get()
      .pipe(
        map(movies => ({ type: '[Cakes] successful cakes load', cakes: movies })),
        catchError(() => of({ type: '[Cakes] fails cakes load' }))
      )
    )
  )
);
}
