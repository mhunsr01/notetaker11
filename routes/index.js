// this calls express and notes and allows them for use in other files
const express = require("express");
const notesRouter = require("./notes");
const app = express();

app.use("/notes", notesRouter);

module.exports = app;