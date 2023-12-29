import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const averageEmission = await sql`SELECT AVG(Value) as averageValue FROM Emission;`;
        return response.status(200).json({ averageValue: averageEmission.rows[0].averageValue });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}