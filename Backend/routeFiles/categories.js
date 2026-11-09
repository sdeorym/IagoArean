import db from "../config/db.js";

let categories = [];
export default async function retrieveCat(req, res) {
    try 
        {
            categories = await db.query(
                'SELECT * FROM categories');
            res.json(categories);
        }
    catch (error)
        {
            res.status(500).json({ 'error': error.message });
        }
}
