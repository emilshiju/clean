
import  {user} from "../entitie/user"

export interface userRepo{
    create(data:user):Promise<user>
}