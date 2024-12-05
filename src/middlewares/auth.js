import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const auth = (request, response, next) => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({
        statusCode: 401,
        statusText: "UNATHORIZED",
        message: "Token não fornecido.",
      });
  }

  jwt.verify(token, JWT_SECRET, (error, user) => {
    if (error) {
      return response
        .status(403)
        .json({
          statusCode: 403,
          statusText: "FORBIDDEN",
          message: "Token inválido.",
        });
    }
    request.user = user;
    next();
  });
};
