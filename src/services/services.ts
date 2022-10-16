import {IThemeService} from "./theme-service";
import {IUserService} from "./iservices/iuser-service";
import {ISessionService} from "./iservices/isession-service";

class ServiceError extends Error {
    constructor(serviceName: string) {
        super(`${serviceName} not set!`);
    }
}

class Services {
    private _themeService?: IThemeService;
    private _userService?: IUserService;
    private _sessionService?: ISessionService;

    get themeService(): IThemeService {
        if (this._themeService === undefined) {
            throw new ServiceError("Theme Service")
        }
        return this._themeService;
    }

    set themeService(value: IThemeService) {
        this._themeService = value;
    }

    get userService(): IUserService {
        if (this._userService === undefined) {
            throw new ServiceError("User Service")
        }
        return this._userService;
    }

    set userService(value: IUserService) {
        this._userService = value;
    }

    get sessionService(): ISessionService {
        if (this._sessionService === undefined) {
            throw new ServiceError("Session Service")
        }
        return this._sessionService;
    }

    set sessionService(value: ISessionService) {
        this._sessionService = value;
    }
}

const services = new Services();
export default services;
