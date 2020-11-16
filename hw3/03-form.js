const express = require("express");
const app = express();
const parser = require("body-parser");
const port = process.env.PORT || 5000;
const path = require("path");

// Add your code below

app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(parser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/submit", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  // Add your code below
  var name = req.body.name;
  var email = req.body.email;
  var comments = req.body.message === "" ? "n/a" : req.body.message;
  var newsletter =
    req.body.newsletter === undefined
      ? "No, thank you."
      : "Yes, I would like to sign up for newsletter";

  res.write(`Name: ${name} \n`);
  res.write(`Email: ${email} \n`);
  res.write(`Comments: ${comments} \n`);
  res.write(`Newsletter: ${newsletter} \n`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
