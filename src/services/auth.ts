import {IAuthService} from "./iservices/iauth";

class AuthService implements IAuthService {
    isAuthorized(): boolean {
        return false;
    }

}

export default AuthService;