import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {CakeState} from '../models/stores.model'
import * as cakeActions from '../stores/cakes/cakes.action';
import * as storeSelectors from '../stores/store.selectors';
import {Cake} from '../models/model'

@Component({
    selector:'cakes',
    templateUrl:'cake.component.html'
})
export class CakeComponent implements OnInit {
    allCakes:Cake[];
    constructor(private store:Store<storeSelectors.AppState>){

    }
    ngOnInit(){
        this.store.pipe(select(storeSelectors.selectAllCakes)).subscribe(data => {
            this.allCakes = data;
        });
        this.store.dispatch(cakeActions.loadCakes());
    }
}