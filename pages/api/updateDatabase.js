import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        await sql`CREATE TABLE IF NOT EXISTS Emission (Value Double Precision)`;
        const {carbonValue} = JSON.parse(request.body)
        await sql`INSERT INTO Emission (Value) VALUES (${+carbonValue});`;
        return response.status(200).json( emission.rows);
    } catch (error) {
        return response.status(500).json({ error });
    }
}
