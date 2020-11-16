const { response } = require("express");
const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;
const url = require("url");

// Add your code below

app.use(
  session({
    store: new session.MemoryStore(),
    secret: "a secret to sign the cookie",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000,
    },
  })
);

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(304);
});

app.get("/", (req, res) => {
  // Add your code below
  var path = url.parse(req.url).pathname;
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.session.data === undefined) {
    req.session.data = [path];
    res.write("currently on route: " + path);
    res.write("\n");
    res.write("Welcome to http://locahost:5000/ ");
    res.end();
  } else {
    res.write("currently on route: " + path + "\n");
    res.write("previously visited: \n");
    res.write(req.session.data.join("\n"));
    req.session.data.push(path);
    res.end();
  }
});

app.get("*", (req, res) => {
  // Add your code below
  var path = url.parse(req.url).pathname;
  console.log(path);
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.session.data === undefined) {
    req.session.data = [path];
    res.write("currently on route: " + path);
    res.write("\n");
    res.write("previously visited: \n");
    res.end();
  } else {
    res.write("currently on route: " + path);
    res.write("\n");
    res.write("previously visited:");
    res.write("\n");
    res.write(req.session.data.join("\n"));
    req.session.data.push(path);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
