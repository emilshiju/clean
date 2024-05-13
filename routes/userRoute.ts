import express from "express"

import {Container} from "inversify"

import { INTERFACE_TYPE } from "../utils/user"
import { userController } from "../controllers/userController"



const container=new Container()

container.bind(INTERFACE_TYPE.userController).to(userController)


const router = express.Router();

const controller=container.get<userController>(
    INTERFACE_TYPE.userController
)


router.post('/user',controller.onUserCreate.bind(controller))
