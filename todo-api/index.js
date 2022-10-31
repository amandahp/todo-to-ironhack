import app from "./src/app.js";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listen server port ${port}`)
});