import { inject, injectable } from "inversify";
import { userInteractor } from "../interfaces/userIntractor";
import { userRepo } from "../interfaces/userRepo";
import { INTERFACE_TYPE } from "../utils/user";
@injectable()

export class  productInteractor implements userInteractor{

    private repository:userRepo
    constructor(
        @inject(INTERFACE_TYPE.userRepo)repository:userRepo,
    ){
        this.repository = repository
    }
    async userCreate(input:any){
        const data=await this.repository.create(input)
        return data
    }
}

