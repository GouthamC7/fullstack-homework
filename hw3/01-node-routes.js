const http = require("http");
var cookie = require("cookie");
const port = process.env.PORT || 5000;

// http://localhost:5000/ should return a status code 200 with a 'welcome' message

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code

// http://localhost:5000/cache should return 'this resource was cached' in plain text and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// for other routes, this exercise should return a status code 404 with '404 - page not found' in plain text

const server = http.createServer((req, res) => {
  // Add your code below
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome</h1>");
    res.end();
  } else if (req.url === "/cache") {
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("this source was cached");
    res.end();
  } else if (req.url === "/cookie") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("hello", "world", {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
      })
    );
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("cookies... yummm");
    res.end();
  } else if (req.url === "/check-cookies") {
    var cookies = cookie.parse(req.headers.cookie || "");
    console.log(cookies);
    res.writeHead(200, { "content-type": "text/plain" });
    if (!cookies.hello) res.write("no");
    else res.write("yes");
    res.end();
  } else if (req.url === "/redirect") {
    res.writeHead(302, { Location: "/redirected" });
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("404- page not found");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
