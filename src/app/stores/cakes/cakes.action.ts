import {createAction,props} from '@ngrx/store';
import {Cake}  from '../../models/model';
import { from } from 'rxjs';

export const loadCakes = createAction(
    '[Cakes] load'
)

export const successCakeLoad = createAction(
    '[Cakes] successful cakes load',
    props<{cakes:Cake[]}>()
);

export const failsCakeLoad = createAction(
    '[Cakes] fails cakes load'
)
