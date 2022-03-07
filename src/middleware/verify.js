const jwtToken = require("jsonwebtoken");

const verifyAuthor = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    const getToken = tokenHeader.split(" ");
    const token = getToken[1];
    const finalToken = jwtToken.verify(token, "secretkey");
    if (finalToken) {
      next();
    } else {
      res.status(400).json({ message: "Unauthorized", status: 400 });
    }
  } else {
    res.status(400).json({ message: "Unauthorized", status: 400 });
  }
};

module.exports = verifyAuthor;
