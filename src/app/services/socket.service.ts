import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  private socket;

  constructor() { }

  public connect() {
    this.socket = io(environment.apiUrl);
  }

  public onNotification(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('notification', (data: any) => {
        observer.next(data)
      });
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
