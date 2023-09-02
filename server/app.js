const express = require("express");
const app = express();
const path = require("path");
const formsRouter = require("./routes/formsRouter");
const cors = require("cors");
const { corsConfig } = require("./utils/serverConfig.js");

app.use(cors(corsConfig));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/forms", formsRouter);

module.exports = app;
