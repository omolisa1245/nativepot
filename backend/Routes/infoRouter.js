import {infoForm } from "../Controller/infoController.js"
import express from "express"


const infoRouter = express.Router()

infoRouter.post("/info",infoForm)


export default infoRouter;
