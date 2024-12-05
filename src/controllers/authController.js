import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (request, response) => {
  const { username, password } = request.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    response.status(201).json({
      statusCode: 201,
      statusText: "CREATED",
      message: "Usuário registrado com sucesso.",
    });
  } catch (error) {
    response.status(400).json({
      statusCode: 400,
      statusText: "BAD_REQUEST",
      message: "Erro ao registrar usuário.",
      error: error,
    });
  }
};

export const login = async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return response.status(404).json({
        statusCode: 404,
        statusText: "NOT_FOUND",
        message: "Usuário não encontrado.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response.status(401).json({
        statusCode: 401,
        statusText: "UNATHORIZED",
        message: "Credenciais inválidas.",
      });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    response
      .status(200)
      .json({ statusCode: 200, statusText: "OK", token: token });
  } catch (error) {
    response
      .status(500)
      .json({
        statusCode: 500,
        statusText: "INTERNAL_SERVER_ERROR",
        message: "Erro ao fazer login.",
        error: error,
      });
  }
};
