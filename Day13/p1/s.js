const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Set up view engine and views directory
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'calc'));

// Validation middleware for /calculate route
function validateInputs(req, res, next) {
  const { num1, num2, operation } = req.query;

  if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    return res.render('calc', { result: ' Please enter valid numbers.' });
  }

  if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
    return res.render('calc', { result: ' Invalid operation selected.' });
  }

  next();
}

app.get('/', (req, res) => {
  res.render('calc');
});

// Calculation route (validation)
app.get('/calculate', validateInputs, (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero.';
      break;
  }

  res.render('calc', { result, num1, num2, operation });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});