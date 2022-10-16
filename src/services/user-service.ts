import {IUserService} from "./iservices/iuser-service";
import {User} from "../interfaces/user";

class UserService implements IUserService {
    async getCurrentUser(): Promise<User> {
        return Promise.reject(undefined)
    }

}

export default UserService;