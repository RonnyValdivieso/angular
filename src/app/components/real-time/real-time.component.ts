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
		this.socket = io("http://localhost:8080");
		// this.socket = io("https://leadbob.io:443", {path:'/dev/api/socket.io'});
		// this.socket = io("https://leadbob.io:443", {path:'/test/socket.io'});
		// this.socket = io("https://leadbob.io/dev/v1", {transport: ['websocket']});
		// this.socket = io("https://io-server.herokuapp.com");
		// this.socket = io("https://qbitcrmapi.herokuapp.com");

		this.socket.on('message', (data) => {
			console.log("Received message from Websocket Server => " + data.message)
		})

		// let observable = new Observable(observer => {
		// 	this.socket.on('status', (data) => {
		// 		console.log("Received message from Websocket Server")
		// 		observer.next(data);
		// 	})
		// 	return () => {
		// 		this.socket.disconnect();
		// 	}
		// });

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
