// import express from 'express';
// import path from "path";
// import bodyParser from 'body-parser';

// let app = express();

// app.set('views', './views');//  template different 
// app.set('view engine', 'hbs');


// app.use(bodyParser.urlencoded({ extended: true }));

// // validation  get invoked 
// app.use((req, res, next) => {
//     console.log('Time:', Date.now());

//     // validate   user pass 
//    // req.set('data', "from use");  // add data in req 
//     req.set('X-Custom-Data', "from middleware");
//     next();  /// pass the control to next method 
// });

// app.get("/about", (req, res) => {
//     console.log('about');
//     if (req.get('X-Custom-Data')) {
//         console.log('Has custom header:', req.get('X-Custom-Data'));
//     // if (req.body.data) {
//     // console.log('Has custom data');

//     } else {
//  console.log('No custom header');
//     }  //  Reading Data 
//     res.render("aboutus")//<>.hbs
// })


// // app.get("/Calc", (req, res) => {
// //     res.render("Calc")
// // })



// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });
// //   Object --- []
// //user { id :  , name ,  skills [c++ , html , jquery ] }  

// // app.post("/docalculation", (req, res) => {

// //     //req.body
// //     let n1 = req.body.num1
// //     let n2 = req.body.num2
// //     // json 
// //     let sum = parseInt(n1) + parseInt(n2)
// //     res.render("calc", { result: sum })
// // })


// // app.get("/maths", (req, res) => {
// //     res.render("mathstable")
// // })

// // app.post("/generate-table", (req, res) => {
// //     let n1 = req.body.num1
// //     let arr = []
// //     for (var i = 0; i <= 10; i++) {
// //         arr[i] = `${n1}*${i}=${n1 * i}`
// //     }
// //     res.render("mathstable", { rowdata: arr })
// // })


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



