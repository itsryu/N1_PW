import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Logger } from '../utils/logger.js';

class Firebase {
    static instance;
    static db;

    constructor() {
        if (!Firebase.instance) {
            Firebase.instance = this;
            this.initFirebase();
        }

        return Firebase.instance;
    }

    initFirebase() {
        if (!getApps().length) {
            const app = initializeApp({
                apiKey: process.env.API_KEY,
                authDomain: process.env.AUTH_DOMAIN,
                projectId: process.env.PROJECT_ID,
                storageBucket: process.env.STORAGE_BUCKET,
                messagingSenderId: process.env.MESSAGING_SENDER_ID,
                appId: process.env.APP_ID,
                measurementId: process.env.MEASUREMENT_ID
            });
            
            Firebase.db = getFirestore(app);
            Logger.info('Firebase inicializado com sucesso.');
        } else {
            Logger.warn('Firebase já inicializado.');
        }
    }

    static getDb() {
        if (!Firebase.db) {
            throw new Error('Firestore não foi inicializado corretamente.');
        }

        return Firebase.db;
    }
}

export { Firebase };