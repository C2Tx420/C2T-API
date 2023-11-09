import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { initRoutes } from "./routes/routes.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

initRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})