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
import { SearchApiService } from './search-api.service'
import { SearchApiEffects } from './search-api.effects'

// ***** @TODO REMOVE ***** //
import { ActionReducer, Action } from '@ngrx/store'
import { SearchCompleteAction, SEARCH_COMPLETE } from './search-api.actions'
import { SearchItem } from './interfaces/search-item'

function resultsReducer(state: Array<SearchItem> = [], action: SearchCompleteAction) {
  console.log(action)
  switch (action.type) {
    case SEARCH_COMPLETE:
      return action.payload

    default:
      return state
  }
}

// ************************ //


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
    StoreModule.forRoot({ searchResults: resultsReducer }),
    EffectsModule.forRoot([SearchApiEffects])
  ],
  providers: [ SearchApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
