import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  showModal : boolean
  constructor() {
    this.showModal = false;
   }

   show() {
    this.showModal = true;
   }

   cancel() {
    this.showModal = false;
   }

   getModalStatus() {
    return this.showModal;
   }
}
