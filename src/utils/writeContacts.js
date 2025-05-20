import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile('src/db/db.json', 'utf-8'); 
    }catch (error) {
        console.error('Error writing contacts:', error);
    }
};
