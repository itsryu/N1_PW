import { Firebase } from './database/firebase.js';
import { Server } from './server.js';

class Client {
    constructor() {
        this.firebase = new Firebase();
    }

    async start() {
        this.server = new Server(Firebase.getDb());
        this.server.start();
    }
}

export { Client };