import { addDoc, collection } from 'firebase/firestore';
import { Logger } from '../utils/logger.js';

class PostHistoryRoute {
    /**
     * @param {import('firebase/firestore').Firestore} db
     */
    constructor(db) {
        this.db = db;
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    run = async (req, res) => {
        const { 
            distance, 
            consumption, 
            fuelPrice, 
            totalConsumption, 
            totalCost 
        } = req.body;

        if (!distance || !consumption || !fuelPrice || !totalConsumption || !totalCost) {
            return res.status(400).json({ error: 'Valores inválidos, preencha todos os campos.' });
        }

        try {
            const docRef = await addDoc(collection(this.db, 'fuel'), {
                distance,
                consumption,
                fuelPrice,
                totalConsumption,
                totalCost,
                timestamp: new Date().toISOString()
            });

            Logger.info(`Item adicionado com sucesso ao histórico. ID: ${docRef.id}`);
            return res.status(201).json({ message: 'Item adicionado com sucesso.', id: docRef.id });
        } catch (error) {
            Logger.error('Erro ao adicionar item ao histórico:', error);
            return res.status(500).json({ error: 'Internal Error: Erro ao adicionar item', status: 500 });
        }
    }
}

export { PostHistoryRoute };