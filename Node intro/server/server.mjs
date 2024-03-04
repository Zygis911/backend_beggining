import express from "express";

import users from "./users.json" assert { type: "json" };

import usersRouter from "./routes/index.mjs"
//darbas su file sistema
import fs from "fs";

import path, { dirname } from "path";

// konvertuojame failo url i failo kelia
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();



const app = express();

const requestTime = function(req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.get('/next', (req, res) => {res.send("hello world")})

app.use(express.json());

app.use("/api/v1/library", requestTime,  usersRouter);

//server identifikavimas

const PORT = 3000;

// aplikacijos paleidimas

app.listen(PORT, () => {
  console.log("server is listening on port 3000");
});
