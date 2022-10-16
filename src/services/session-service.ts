import {ISessionService} from "./iservices/isession-service";
import {User} from "../interfaces/user";

class SessionService implements ISessionService {
    async login(): Promise<User> {
        return Promise.reject(undefined);
    }

    async logout(): Promise<void> {
        return Promise.reject(undefined);
    }

    async signUp(): Promise<User> {
        return Promise.reject(undefined);
    }

}

export default SessionService;