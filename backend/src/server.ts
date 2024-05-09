import "dotenv/config";

const cors = require("cors");
import express from "express";
import { db } from "./models/database/mongodbConfig";
import userRoute from "./routes/userRoute";
import studentRoute from "./routes/studentRoute";
import classRoute from "./routes/classRoute";
import enrollmentRoute from "./routes/enrollmentRoute";

db.initDatabaseConnection();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/reset", (_, res) => {
    db.dropDatabase().then((result) => {
        res.send(result ? "Database reset" : "Failed to reset database");
    });
})

const apiRoutes = {
    "/account": userRoute,
    "/student": studentRoute,
    "/class": classRoute,
    "/enrollment": enrollmentRoute,
}
for (const key of Object.keys(apiRoutes)) {
    app.use(key, apiRoutes[key as keyof typeof apiRoutes]);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});