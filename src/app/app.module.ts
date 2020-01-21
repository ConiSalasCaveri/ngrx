import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-test/ngrx-test.reducer';
import { reducer } from './ngrx-test/ngrx-test.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NgrxTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ person: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
