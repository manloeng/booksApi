const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const helmet = require("helmet");
const apiRouter = require("./src/router/api");
const { routeNotFound, handleCustomErrors, handle500 } = require("./src/error");

// cors allows all origins currently - should be changed to up security
app.use(cors());
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", apiRouter);

app.all("/*", routeNotFound);

app.use(handleCustomErrors);
app.use(handle500);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
