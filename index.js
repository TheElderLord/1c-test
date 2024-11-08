const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.text()); // for parsing text/plain
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded\

app.post("/api/v1/check/:id", (req, res) => {
  const body = req.body;
  const header = req.headers;
  const params = req.params;
  const query = req.query;

  console.log("BODY:", JSON.stringify(body, null, 2));
  console.log("HEADER:", JSON.stringify(header, null, 2));
  console.log("PARAMS:", JSON.stringify(params, null, 2));
  console.log("QUERY:", JSON.stringify(query, null, 2));

  res.status(200).json({
    body,
    header,
    params,
    query
  });
});
const appPort = 3000;

app.listen(appPort, () => {
  console.log(`Server listening on port ${appPort}`);
});
