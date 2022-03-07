const express = require("express");
const app = express();
const adminRouter = require("./src/routes/admin")
const userRouter = require("./src/routes/user")
const mcqRouter = require("./src/routes/crudMcq")
const bodyParser = require("body-parser")
require("./src/db")

const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use("/auth",adminRouter)
app.use("/auth",userRouter)
app.use("/admin",mcqRouter)

app.listen(port, () => {
    console.log(`server Listen to port ===> ${port}`)
})
