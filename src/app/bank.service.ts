import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor() {}
  launchingData = new EventEmitter<string>();

  onlaunch(missile: string) {
    this.launchingData.emit(missile);
    // console.log(missile);
  }
}
