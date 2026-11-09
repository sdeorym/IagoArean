import db from "../config/db.js";

let cat = [];
let pry = [];
let pf = [];
export default async function retrievePf(req, res) {
    try 
        {   
            cat = await db.query('SELECT categories.id, categories.title, categories.slug, categories.image, categories.alt FROM categories');
            for (const c of cat[0]) {
                pry = await db.query(`SELECT projects.id, projects.name, projects.situation FROM projects, categories_projects WHERE categories_id = ${c.id} AND categories_projects.projects_id=projects.id`);                
                for (const p of pry[0]) {
                    pf = await db.query(`SELECT contents.id, contents.src, contents.alt, contents.className, contents.caption, contents.video FROM contents, projects_contents WHERE projects_id = ${p.id} AND projects_contents.contents_id = contents.id`);
                    p.contents = structuredClone(pf[0]);
                }
                c.projects = structuredClone(pry[0]);
            }

            res.json(cat[0]);
        }
    catch (error)
        {
            res.status(500).json({ 'error': error.message });
        }
}
