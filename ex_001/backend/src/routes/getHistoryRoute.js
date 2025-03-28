import { collection, getDocs } from 'firebase/firestore';

class GetHistoryRoute {
    /**
     * @param {import('firebase/firestore').Firestore} db
     */
    constructor(db) {
        this.db = db;
    }

    /**
     * @param {import('express').Request} _ 
     * @param {import('express').Response} res
     */
    run = async (_, res) => {
        try {
            const history = await this.getHistory();

            res.status(200).json(history.map((fuel) => fuel.data()));
        } catch (error) {
            console.error('Erro ao buscar histórico:', error);
            res.status(500).json({ error: 'Internal Error: Erro ao buscar histórico', status: 500 });
        }
    }

    getHistory = async () => {
        const querySnapshot = await getDocs(collection(this.db, 'fuel'));
        const history = [];

        querySnapshot.forEach((doc) => history.push(doc));

        return history;
    };
}

export { GetHistoryRoute };