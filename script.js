import express from "express";
import cors from "cors";

import { data } from "./data/data.js";
console.log(data);

const app = express();
const PORT = 7100;

app.use(express.json());

app.use(express.static("public"));
app.use(cors("*"));

app.get("/api/get", (req, res) => {
  let result = data.filter((el) => el.keywords.includes(req.query.filter))
  res.status(200).json(result);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
