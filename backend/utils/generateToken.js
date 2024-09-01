import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "your_jwt_secret", {
    expiresIn: "30d",
  });
};

export default generateToken;
