import { Client } from './src/client.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client();
client.start();