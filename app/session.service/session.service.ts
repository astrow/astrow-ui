import { Injectable } from 'angular2/core';
// import * as _ from 'lodash';

@Injectable()
export class SessionService {
    private socket;
    distance: number;
    startTime: Date;
    rowers: any[] = [];

    get inSession():boolean {
        return this.startTime != null;
    }
    
    get elapsedTime():any {
    //     // return (Date.now() - this.startTime;
        return 0;
    }

    constructor() {
        // this.socket = io("http://localhost:8080");
        this.socket = io("http://server.astrow.site");

        //handle a stroke message
        this.socket.on("stroke", (data) => {
            //TODO: update our app state with the new message
            //will require adding the stroke rate to the user's array
            console.log(`stroke received from ${data.name}`);

            // add user if not exist
            if (!this.rowers.some(r => r.name == data.name)) {
                console.log(`adding ${data.name}`);
                this.rowers.push({
                    name: data.name,
                    strokeRates: [],
                    caloriesPerMinute: 0,
                    distance: 0
                });
            }

            if (this.inSession) {
                let r = this.rowers.filter(r => r.name == data.name)[0];
                r.strokeRates.push(data.strokeRate);
                r.distance = Math.min(this.distance, r.distance + data.distance);
                if (r.distance >= this.distance) {
                    //TODO:declare winner
                    this.startTime = null;
                }
            }
        });

        this.socket.on("start", (sessionData) => {
            this.startTime = sessionData.startTime;
            this.distance = sessionData.distance;
            this.rowers.forEach(r => { r.distance = 0; r.strokeRates = []; });
            console.log(`session started\n  start time: ${this.startTime}\n  distance: ${this.distance}`);
        })

        this.socket.on("stop", () => {
            // a non-null value for this.sessionService.startTime should mean a session is currently underway
            // to stop a session, simply null that value
            this.startTime = null;
            console.log("session stopped");
        })
    }

    simulateStroke(name: string) {
        this.socket.emit("stroke", {
            name: name,
            strokeRate: Math.round((Math.random() * 5) + 20),
            caloriesPerMinute: Math.round((Math.random() * 10) + 70),
            distance: Math.round((Math.random() * 5) + 20)
        });
    }

    start() {
        let sessionData = {
            startTime: new Date(),
            distance: 500 //hard code to 500m for now
        };
        this.socket.emit("start", sessionData);
    }

    stop() {
        this.socket.emit("stop");
    }

}