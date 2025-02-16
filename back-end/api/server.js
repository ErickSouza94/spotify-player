// API - Application Programming Interface
// REQUISIÇÕES : POST, GET, PUT, DELETE
// CRUD - Create, Read, Update, Delete

import express from "express";
import cors from 'cors'
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors())

app.get("/", (request, response) => {
  response.send("Só vamos trbalhar com os endpoints '/artists' e '/songs' ");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor escutando a porta ${PORT}`);
});
