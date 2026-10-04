const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from 'resend';

dotenv.config();

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

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var access = fs.createWriteStream('./node.access.log', { flags: 'a' });
//var error = fs.createWriteStream('./node.error.log', { flags: 'a' });

process.stdout.write = process.stderr.write = access.write.bind(access);

dotenv.config();

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', '/index.html'));
});


app.post("/contact", async (req, res) => {
  const url= process.env.MAIL_URL;
  const API_key = process.env.RESEND_API_KEY;
  // const basicAuth = btoa(pw);

  const { username, email, message } = req.body;

  const resend = new Resend(API_key);

  const { data, error } = await resend.emails.send({
    from: 'info@lpgconsulting.fr',
    to: ['sdeorym@gmail.com'],
    subject: '[Webpage contact]',
    text: 'From: ' + username + ' Email: ' + email + ' Message: ' + message
    });
  res.status(200).json({ success: true });
});
  

app.listen(process.env.PORT || 3000, "0.0.0.0")
