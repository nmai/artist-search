import { Component } from '@angular/core'
import { SearchInputComponent } from './search-input.component'
import { SearchApiService } from '../search-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private search: SearchApiService) {}
}
