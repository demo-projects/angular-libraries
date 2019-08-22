import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StringUtilsService {

  private whiteList: Set<string>;

  constructor() {
    this.whiteList = new Set();
    console.log('StringUtilsService Instance');
  }

  addToWhiteList(word: string): Set<string>{
    return this.whiteList.add(word)
  }

  removeFromList(word: string): boolean {
    return this.whiteList.delete(word);
  }

  isValid(word): boolean {
    return this.whiteList.has(word)
  }
}
