import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app.component'
import { ResultsContainerComponent } from './components/results-container.component'
import { ItemComponent } from './components/item.component'
import { SearchInputComponent } from './components/search-input.component'
import { SearchEffects } from './search.effects'
import { responseReducer } from './search.reducer'


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ResultsContainerComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ searchResults: responseReducer }),
    EffectsModule.forRoot([ SearchEffects ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
