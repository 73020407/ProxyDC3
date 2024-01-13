const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({origin: "http://localhost:8081"}));

// content-type = application/json
app.use(bodyParser.json());
// content-type = application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ProxyDC Express Server" }); /* To delete */
});

app.get("/auth", (req, res) => {
  res.json({ message: "Formulaire d'authentification" }); 
});

/* PUT ou POST pour la creation par Backoffice */
/*
- verif auth
- create session
- create DC / insert name... in database
- return (dc_id, session_id) to generate link
*/

app.get("/dc/:id/:session", (req, res) => {
  /* verif session*/
  res.json({ message: "ProxyDC Express Server" });
});

/* PUT ou POST vu que modif seulement */


app.get("/connected", (req, res) => {
res.json({ message: "Dashboard" });
/*
- verif auth
- read param ()
*/
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
