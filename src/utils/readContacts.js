import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile('src/db/db.json', 'utf-8');
        console.log('Data read from file:', data);
    }
    catch (error) {
        console.error('Error reading contacts:', error);
    }
};
