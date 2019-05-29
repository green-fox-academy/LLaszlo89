"use strict";

const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");

path.join(__dirname, "index.html");
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/send", (req, res) => {
  //kilogoljuk a szerver oldalon a bodybol
  console.log(req.body);
  //valaszkent visszakuljuk a kliens oldalnak a bodyt, just to make sure
  res.json(req.body);
  //--------------------------------------
  //megerkezik a keres a kliens oldalrol, (req.body)
  //ha nincs hiba, ezt egy queryvel beillesztjuk az adatbazisunkba
  //conn.query('INSERT INTO tablazatom (username, password) VALUES (req.body.username, req.body.password');
  //ha meg mindig nincs hiba, valaszt kuldunk a kliens oldal fele
  //res.status(200).send("minden rendben, jozsi");
  //hiba eseten: res.status(500).send("baj van!!")
});

app.get('/szia', (req, res) => {
  res.send('Szia Lehel!');
})

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT} 👌`);
});
