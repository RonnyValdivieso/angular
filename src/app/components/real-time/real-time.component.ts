import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
	selector: 'app-real-time',
	templateUrl: './real-time.component.html',
	styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {

	private socket;

	constructor() {
		this.connect();
	}

	connect(): Rx.Subject<MessageEvent> {
		// this.socket = io("http://localhost:9000");
		this.socket = io("https://leadbob.io:443");

		let observable = new Observable(observer => {
			this.socket.on('message', (data) => {
				console.log("Received message from Websocket Server")
				observer.next(data);
			})
			return () => {
				this.socket.disconnect();
			}
		});

		this.socket.on('connect', function () {
			alert('Todo lo que es el socket: Online');
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
		return Rx.Subject.create(observer, observable);
	}

	ngOnInit() {
	}

}
