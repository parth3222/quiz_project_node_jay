const mcqSchema = require("../models/mcq");
const userModel = require("../models/userModels");
const mcqModel = require("../models/mcq");

exports.getQuizMcq = async (req, res) => {
  try {
    const getType = req.body.type;
    if (getType && getType.length) {
      let dataForExam = await mcqSchema.find({ type: req.body.type }).limit(20);

      if (dataForExam) {
        let currentIndex = dataForExam.length,
          temporaryValue,
          randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = dataForExam[currentIndex];
          dataForExam[currentIndex] = dataForExam[randomIndex];
          dataForExam[randomIndex] = temporaryValue;
        }

        res.status(200).json({
          message: "Get Mcq For Quiz Sccessfully",
          status: 200,
          data: dataForExam,
        });
      } else {
        res.status(400).json({ message: "Something Went Wrong", status: 400 });
      }
    } else {
      res.status(400).json({ message: "Something Went Wrong", status: 400 });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.takeExamHandler = async (req, res) => {
  try {
    let totalMarks = 0;
    let subjectType = "";
    for (let i = 0; i < req.body.answers.length; i++) {
      const questionId = req.body.answers[i].questionId;
      const submittedAnswer = req.body.answers[i].submittedAnswer;
      let dataForExam = await mcqModel.findOne({ _id: questionId });
      subjectType = dataForExam.type;
      if (dataForExam.correct === submittedAnswer) {
        totalMarks++;
      }
    }
    let negativeMarks = 20 - totalMarks;
    const updateExam = await userModel.findByIdAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          pastexam: [
            {
              totalMarks: totalMarks,
              negativeMarks: negativeMarks,
              subjectType: subjectType,
            },
          ],
        },
      },
      { new: true }
    );
    res.status(201).json(updateExam);
  } catch (error) {
    res.status(400).json(error);
  }
};
