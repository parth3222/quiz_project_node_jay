const express = require("express");
const router = express.Router();
const mcqRoutes = require("../controller/crudMcq")
const verifyAuthor = require("../middleware/verify")

router.post("/add-mcq",verifyAuthor, async (...data) => mcqRoutes.addMcq(...data));

router.put("/edit-mcq/:id",verifyAuthor, async (...data) => mcqRoutes.editMcq(...data));

router.delete("/delete-mcq/:id",verifyAuthor, async (...data) => mcqRoutes.deleteMcq(...data));

router.get("/get-mcq",verifyAuthor, async (...data) => mcqRoutes.getAllMcq(...data));

router.post("/get-mcq-by-type",verifyAuthor, async (...data) => mcqRoutes.getMcqByType(...data));

module.exports = router;