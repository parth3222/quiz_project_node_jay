const mongoose = require("mongoose");

const mcqSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "quiz title Is Require"],
    },
    opationA: {
      type: String,
      required: [true, "opation A Is Require"],
    },
    opationB: {
      type: String,
      required: [true, "opation B Is Require"],
    },
    opationC: {
      type: String,
      required: [true, "opation C Is Require"],
    },
    opationD: {
      type: String,
      required: [true, "opation D Is Require"],
    },
    correct: {
      type: String,
      required: [true, "Correnct Answer Is Require"],
    },
    type: {
      type: String,
      required: [true, "Type Is Require"],
    },
  },
  { timestamps: true }
);

const mcqModels = mongoose.model("mcq", mcqSchema);
module.exports = mcqModels;
