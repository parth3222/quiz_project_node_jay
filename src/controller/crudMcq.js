const mcqSchema = require("../models/mcq");

exports.addMcq = async (req, res) => {
  try {
    const createMcq = await mcqSchema.create(req.body);
    if (createMcq) {
      res.status(200).json({
        message: "create Mcq Successfully",
        status: 200,
        data: createMcq,
      });
    } else {
      res.status(400).json({ message: "Something Went Wrong" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.editMcq = async (req, res) => {
  try {
    const editedId = req.params.id;
    if (editedId) {
      const updateMcq = await mcqSchema.findByIdAndUpdate(
        { _id: editedId },
        req.body,
        { new: true }
      );
      if (updateMcq) {
        res
          .status(200)
          .json({ message: "successfully Edit", status: 200, data: updateMcq });
      } else {
        res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
      }
    } else {
      res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteMcq = async (req, res) => {
  try {
    const deleteId = req.params.id;
    if (deleteId) {
      const deleteMcq = await mcqSchema.findByIdAndDelete(deleteId);
      if (deleteMcq) {
        res.status(200).json({
          message: "successfully delete",
          status: 200,
          data: deleteMcq,
        });
      } else {
        res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
      }
    } else {
      res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllMcq = async (req, res) => {
  try {
    const mcqData = await mcqSchema.find();
    if (mcqData) {
      res.status(200).json({
        message: "successfully get All Mcq",
        status: 200,
        data: mcqData,
      });
    } else {
      res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getMcqByType = async (req, res) => {
  try {
    const mcqData = await mcqSchema.find();
    const filterdMcq = mcqData.filter((item) => item.type == req.body.type);
    if (filterdMcq) {
      res.status(200).json({
        message: "successfully get All Mcq",
        status: 200,
        data: filterdMcq,
      });
    } else {
      res.status(400).json({ message: "Somthing Went Wrong", status: 400 });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
