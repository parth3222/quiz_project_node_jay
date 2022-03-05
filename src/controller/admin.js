const adminSchema = require("../models/adminModels");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");

exports.adminRegister = async (req, res) => {
  try {
    const bcryptPassword = await bcrypt.hash(req.body.password, 12);
    if (bcryptPassword) {
      const adminDetail = await adminSchema.create({
        ...req.body,
        password: bcryptPassword,
      });
      res.status(200).json({
        message: "Register SuccessFully",
        statusCode: 200,
        data: adminDetail,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const findUser = await adminSchema.findOne({ email: req.body.email });
    if (findUser) {
      const comparePassword = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      const getToken = jwtToken.sign({ _id: findUser._id }, "secretkey");
      if (comparePassword) {
        res
          .status(200)
          .json({
            message: "Login Successfully",
            token: getToken,
            data: findUser,
          });
      } else {
        res.status(400).json({ message: "Invalid Login Credentials" });
      }
    } else {
      res.status(400).json({ message: "Invalid Login Credentials" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
