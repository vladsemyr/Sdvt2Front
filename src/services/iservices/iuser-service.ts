import {IService} from "./iservice";
import {User} from "../../interfaces/user";

interface IUserService extends IService {
    getCurrentUser: () => Promise<User>,
}

export type {IUserService};