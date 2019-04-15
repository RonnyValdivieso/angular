import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Event } from 'src/app/models/event';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: any = [];
  ioConnection: any;
  private socket;

  constructor(private socketService: SocketService) {
    this.connect();
  }

  connect(): Rx.Subject<MessageEvent> {
		this.socket = io("http://localhost:8080");

		this.socket.on('message', (data) => {
      console.log("Received message from Websocket Server => " + data.message);
      this.notifications.push(data);
		})

		this.socket.on('connect', function () {
			console.log('Connected');
		});
		
		// We define our Observer which will listen to messages
		// from our other components and send messages back to our
		// socket server whenever the `next()` method is called.
		let observer = {
			next: (data: Object) => {
				this.socket.emit('message', JSON.stringify(data));
			},
		};

		// we return our Rx.Subject which is a combination
		// of both an observer and observable.
		return Rx.Subject.create(observer);
	}

  ngOnInit() {
  }

}
