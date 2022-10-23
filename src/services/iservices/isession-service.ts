import {IService} from "./iservice";
import {User} from "../../interfaces/user";

interface ISessionService extends IService {
    login({phone, password}: {phone: string, password: string}): Promise<User>,
    signUp: ({phone, password}: {phone: string, password: string}) => Promise<User>,
    logout: () => Promise<void>,
    isAuthorized: () => boolean,


}

export type {ISessionService};