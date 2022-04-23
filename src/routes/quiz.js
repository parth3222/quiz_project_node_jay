const express = require("express");
const verifyAuthor = require("../middleware/verify");
const router = express.Router();
const quizRouter = require("../controller/quiz");

router.post("/get-mcq-random", verifyAuthor, async (...data) =>
  quizRouter.getQuizMcq(...data)
);

router.post("/take-exam", verifyAuthor, async (...data) =>
  quizRouter.takeExamHandler(...data)
);

module.exports = router;
