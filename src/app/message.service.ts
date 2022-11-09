import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  // push messages to a string array
  add(message: string) {
    this.messages.push(message);
  }

  // clean all the messages from the string array
  clear() {
    this.messages = [];
  }

  constructor() { }
}
