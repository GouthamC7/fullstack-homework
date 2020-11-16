const express = require("express");
const app = express();
const axios = require("axios");
const fetch = require("node-fetch");
const { response } = require("express");
const port = process.env.PORT || 5000;
var json;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// Add your code below

const url = "https://restcountries.eu/rest/v2/all";

async function getJSON() {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
}

async function caller() {
  json = await getJSON();
}

caller();

app.get("/main", (req, res) => {
  var elements = [];
  for (var i = 0; i < json.length; i++) {
    var element = `${json[i].name} - ${json[i].capital}`;
    elements.push(element);
  }
  res.render("main", { maindata: elements });
});

app.get("/populous", (req, res) => {
  caller();
  var elements = [];
  for (var i = 0; i < json.length; i++) {
    if (json[i].population >= 20000000) {
      elements.push(json[i]);
    }
  }
  elements.sort((a, b) => b.population - a.population);
  res.render("populous", { populousdata: elements });
});

app.get("/regions", (req, res) => {
  caller();
  var elements = [];
  for (var i = 0; i < json.length; i++) {
    elements.push(json[i].region);
  }
  var result = countOccurrences(elements);
  var regiondata = [];
  for (const [key, value] of Object.entries(result)) {
    if (key !== "") {
      regiondata.push(`${key}: ${value}`);
    }
  }
  res.render("regions", { regionsdata: regiondata });
});

const countOccurrences = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
