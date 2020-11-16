const http = require("http");
const url = require("url");
const querystring = require("querystring");

const port = process.env.PORT || 5000;

// Add your code below

const server = http.createServer((req, res) => {
  // Add your code below
  var parts = url.parse(req.url, true).query;
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<html>");
  res.write('<table style="border:1px solid black">');
  Object.keys(parts).forEach((prop) => {
    res.write('<tr style="border:1px solid black">');
    res.write(`<td style="border:1px solid black">${prop}</td>`);
    res.write(`<td style="border:1px solid black">${parts[prop]}</td>`);
    res.write("</tr>");
  });
  res.write("</table>");
  res.write("</html>");
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
