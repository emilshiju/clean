

import {userRepo} from "../interfaces/userRepo"

import  {user} from "../entitie/user"



export class userRepositaory  implements userRepo{

    constructor(){

    }
    async create({name,age,gender}:user): Promise<user>{
        return { name, age, gender };
    }
}