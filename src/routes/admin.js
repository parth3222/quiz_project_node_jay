const express = require("express");
const router = express.Router();
const adminRoutes = require("../controller/admin");

router.post("/admin-register", async (...data) =>
  adminRoutes.adminRegister(...data)
);

router.post("/admin-login", async (...data) =>
  adminRoutes.loginAdmin(...data)
);

module.exports = router;