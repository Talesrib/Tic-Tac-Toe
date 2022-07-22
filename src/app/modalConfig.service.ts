import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  showModal : number
  constructor() {
    this.showModal = 0;
   }

   show(num : number) {
    this.showModal = num;
   }

   cancel() {
    this.showModal = 0;
   }

   getModalStatus() {
    return this.showModal;
   }
}
