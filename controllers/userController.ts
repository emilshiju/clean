import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { userInteractor } from "../interfaces/userIntractor"
import { INTERFACE_TYPE } from "../utils/user";


@injectable()

export class userController{
    private interactor:userInteractor

    constructor(
        @inject(INTERFACE_TYPE.userInteractor)interactor:userInteractor
    ){
        this.interactor=interactor
    }

    async  onUserCreate(req: Request, res: Response, next: NextFunction){
        const body=req.body
        const data=await this.interactor.userCreate(body)
        return  res.status(200)
    }
}