const jwtToken = require("jsonwebtoken");
const userModel = require("../models/userModels")
const adminModel = require("../models/adminModels")

const verifyAuthor = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (tokenHeader) {
    const getToken = tokenHeader.split(" ");
    const token = getToken[1];
    const finalToken = jwtToken.verify(token, "secretkey");

    const userInfo = await userModel.findById(finalToken._id);
    const adminInfo = await adminModel.findById(finalToken._id);

    if (finalToken && userInfo) {
      req.user = userInfo;
      next();
    } else if(finalToken && adminInfo) {
      req.user = adminInfo;
      next();
    } else {
      res.status(400).json({ message: "Unauthorized", status: 400 });
    }
  } else {
    res.status(400).json({ message: "Unauthorized", status: 400 });
  }
};

module.exports = verifyAuthor;
