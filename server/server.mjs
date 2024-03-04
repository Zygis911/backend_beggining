import express from "express"

import fs from "fs"

import path, {dirname} from "path"

import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const router = express.Router();

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server is listening on port 3000")
})






