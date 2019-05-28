//import dependencies
const express = require('express');
const mysql = require('mysql');
const path = require('path') 
/*
path.join(__dirname, 'index.html') //-> erre változik  -> c:/users/dalma/desktop/laci/bookstore/index.html
*/

//create an express instance 
const app = express();
//assign a port number to a variable 
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

//tells express to use this handler -> makes parsing of JSON data in POST requests possible
app.use(express.json());

//connects to sql database
conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('connection established');
});

app.get('/books', (req, resp) => {
  let query = `
  select book_name , aut_name , cate_descrip, pub_name, book_price
  from book_mast 
  inner join author on book_mast.aut_id = author.aut_id 
  inner join publisher on publisher.pub_id = book_mast.pub_id
  inner join category on category.cate_id = book_mast.cate_id`;

  let moreThanOneFilter = false;

  if(req.query.category) {
    if (!moreThanOneFilter) {
      query += ` where `
      moreThanOneFilter = true;
    } else {
      query += `and `
    }
    query += ` cate_descrip = '${req.query.category}' `;
  }

  if(req.query.publisher) {
    if (!moreThanOneFilter) {
      query += ` where `
      moreThanOneFilter = true;
    } else {
      query += `and `
    }
    query += ` pub_name like '%${req.query.publisher}%' `;
  }

  conn.query(query, (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Sql error!');
    } else {
      resp.send(result);
    }
  });
})

app.get('/titles',(req, resp) => {
  const query = 'select book_name from book_mast';
  conn.query(query, (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Sql error!');
    } else {
      resp.send(result);
    }
  });
});

app.get('/test',(req, resp) => {
  resp.sendFile(path.join(__dirname, 'index.html'));
});

//starts the server
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});