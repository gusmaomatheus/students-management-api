import dontenv from "dotenv";
import express from "express";

dontenv.config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor ativo e aguardando requisições...");
});
