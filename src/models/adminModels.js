const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = mongoose.Schema(
  {
    status: String,
    role: String,
    firstName: {
      type: String,
      required: [true, "FirstName Is Require"],
    },
    lastName: {
      type: String,
      required: [true, "LastName Is Require"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email Id is Already Present"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("inValid email");
        }
      },
    },
    password: {
      type: String,
      required: [true, "Password Is Require"],
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;
