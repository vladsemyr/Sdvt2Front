import {IService} from "./iservice";
import {User} from "../../interfaces/user";

interface ISessionService extends IService {
    login: () => Promise<User>,
    signUp: () => Promise<User>,
    logout: () => Promise<void>,
}

export type {ISessionService};