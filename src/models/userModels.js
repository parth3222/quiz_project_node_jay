const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
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
    phoneNo: {
      type: Number,
      required: true,
      minLength: 10,
      unique: [true, "Phone Number is Already Present"],
    },
    pastexam: [
      {
        totalMarks: Number,
        negativeMarks: Number,
        subjectType: String,
      },
    ],
  },
  { timestamps: true }
);

const user = new mongoose.model("user", userSchema);

module.exports = user;
