const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("/api");

const { init: initDB, Counter } = require("./db");

const logger = morgan("tiny");

const app = express();
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

Object.entries(api).forEach(([path, { method, handler }]) => {
  app[method](path, handler);
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
