import {createFeatureSelector, createSelector} from '@ngrx/store'
import { CakeState } from "../models/stores.model";
export interface AppState {
    cake:CakeState
}

export const selectCakeSate = createFeatureSelector<AppState,CakeState>('cake');

export const selectAllCakes = createSelector(selectCakeSate, state => state.Data);
