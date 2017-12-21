import { SearchItem } from '../interfaces/search-item'

export class ListModel {
  private _list: Array<SearchItem>

  constructor() {
    this._list = []
  }

  public update(newState) {
    this._list = newState
  }

  get list(): Array<SearchItem> {
    return this._list
  }
}