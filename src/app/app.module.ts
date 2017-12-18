import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app.component'
import { ResultsContainerComponent } from './components/results-container.component'
import { ItemComponent } from './components/item.component'
import { SearchInputComponent } from './components/search-input.component'
import { SearchApiService } from './search-api.service'


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

    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [ SearchApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
