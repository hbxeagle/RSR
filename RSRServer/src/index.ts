import express from "express";

const app = express();
const port = 3000; // default port to listen

app.get("/", (req, res) => {
  res.json({ message: "hello world!", ecode: 0 });
  res.end();
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
