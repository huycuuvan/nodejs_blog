const express = require("express");
const port = 8888;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.listen(port || 8081, () => {
  console.log(`Server working at http://localhost:${port || "8081"} `);
});
