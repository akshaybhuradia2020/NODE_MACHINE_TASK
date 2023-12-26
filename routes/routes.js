import { Router } from "express";
import {registration} from "../middlewares/registration.js";


export const routes = Router();

routes.post("/registration", [registration], (req, res, next) => {
    if(res.locals.check === false){
        res.send("USER IS ALREADY REGISTERED");
    }
    else{
        res.send("USER IS REGISTERED");
    }
    
});

routes.get("/login", (req, res, next) => {
    res.send("login");
});

routes.get("/logout", (req, res, next) => {
    res.send("logout");
});

routes.get("/get_products",(req, res, next) => {
    res.send("get_products");
});
