const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // console.log("Нэвтэрсэн хэрэглэгч шалгах", req.headers.authorization);

  if (!req.headers.authorization) {
    res.status(401).json({ message: "Энэ үйдлийг хийхийн тулд нэвтэрнэ үү." });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
  req.user = user;
  next();
};

module.exports = { auth };
