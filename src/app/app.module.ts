import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CakeComponent} from './cakes/cake.component';
import * as cakeReducer from './stores/cakes/cakes.reducer';
import {CakeEffects} from './stores/cakes/cakes.effect';
import {CakeService} from './services/cake.service';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({cake:cakeReducer.reducer}),
    EffectsModule.forRoot([CakeEffects]),
    AppRoutingModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
