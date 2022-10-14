const express = require('express');
const { sayHello, uppercase, lowercase } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers')

const app = express();

app.use(express.json());

// Strings

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.json({ result: lowercase(req.params.string) });
});

// Numbers - Adding

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
 });

 // GET /subtract/{number}/from/{number}

 app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }

  if (Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }

  return res.status(200).json({ result: subtract(b, a) });
});

//  POST /multiply

app.post('/numbers/multiply', (req, res) => { 
  if (req.body.a === 0 || req.body.b === 0) return res.status(200).json({ result: 0})

  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' })
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' })
  }

  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

// POST /divide

app.post('/numbers/divide', (req, res) => {
  
  if(req.body.a === 0 ) {
    return res.status(200).json({ result: 0 })
  }

  if (req.body.b === 0 || req.body.b === "0") return res.status(400).json({ error: 'Unable to divide by 0.' })
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' })
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' })
  }


  res.status(200).json({ result: divide(a, b) });
});

// POST /remainder

app.post('/numbers/remainder', (req, res) => {

  if(req.body.a === 0 ) {
    return res.status(200).json({ result: 0 })
  }

  if (req.body.b === 0 || req.body.b === "0") return res.status(400).json({ error: 'Unable to divide by 0.' })
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' })
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' })
  }


  res.status(200).json({ result: remainder(a, b) })
})

module.exports = app;
