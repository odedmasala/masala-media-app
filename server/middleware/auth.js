import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return next(createError(403, "Access Denied"));
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }
  try {
    const verified = jwt.verify(token, process.env.JWT);
    req.user = verified;
    next();
  } catch(err) {
    next(err);
  }
};
