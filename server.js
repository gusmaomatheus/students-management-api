import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { login, register } from "./src/controllers/authController.js";
import { auth } from "./src/middlewares/auth.js";
import studentRoutes from "./src/routes/studentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "atividade_carlao",
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.post("/register", register);
app.post("/login", login);

app.use("/alunos", auth, studentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
