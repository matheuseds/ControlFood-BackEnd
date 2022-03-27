import { Router } from "express";
import dev from "./views/dev.view";

const routes = new Router();

routes.use("/dev", dev);
module.exports = routes;
