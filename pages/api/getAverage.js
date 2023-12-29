import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const emission = await sql`SELECT * FROM Emission;`;
        return response.status(200).json( emission.rows);
    } catch (error) {
        return response.status(500).json({ error });
    }
}