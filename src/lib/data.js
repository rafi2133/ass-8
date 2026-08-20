// lib/data.js
import fs from 'fs';
import path from 'path';

export const jsondata = async () => {
    
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
};