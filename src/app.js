import Express from "express";
import BodyParser from "body-parser";
import Routes from "./routes";
var cors = require("cors");
var app = Express();
app.use(Express.json());
app.use(BodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  req.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next;
});

class App {
  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(Express.json());
  }
  routes() {
    this.server.use(Routes);
  }
}
module.exports = new App().server;
