import { Action, createReducer, on } from "@ngrx/store";
import * as cakesAction from './cakes.action';

import { CakeState } from "../../models/stores.model";

export const initialState:CakeState ={
  Data : [],
  SuccessMessage : '',
  ErrorMessage: ''
}

const cakeReducer = createReducer(
    initialState,
    on(cakesAction.successCakeLoad,
        (state, {cakes}) => {
            return {
                ...state,
                Data : cakes,
                SuccessMessage : 'Success',
                ErrorMessage:''
            }
        }),
    on(cakesAction.failsCakeLoad,
        state => {
            return {
                ...state,
                Data:[],
                SuccessMessage:'',
                ErrorMessage:'failed'
            }
        })    
)

export function reducer(state: CakeState | undefined, action: Action){
    return cakeReducer(state, action);
}
