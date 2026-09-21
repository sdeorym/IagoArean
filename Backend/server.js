const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
import { fileURLToPath } from "url";
import express from "express";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (filePath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

app.get('/', (req, res) => {
    const projfile = path.join(__dirname, 'data/proyectos.json');
    const content = fs.readFileSync(projfile, 'utf-8');
    const data = JSON.parse(content);
    res.status(200), JSON(data);
});

