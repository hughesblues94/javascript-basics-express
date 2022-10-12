const express = require('express');
const { sayHello, uppercase, lowercase } = require('./lib/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:hello', (req, res) => {
  res.status(200);
  res.json({ result: uppercase(req.params.hello) });
});

app.get('/strings/lower/:HELLO', (req, res) => {
  res.status(200);
  res.json({ result: lowercase(req.params.HELLO) });
});

module.exports = app;
