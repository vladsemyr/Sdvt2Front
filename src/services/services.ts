import {IThemeService} from "./theme";
import {IAuthService} from "./iservices/iauth";

class ServiceError extends Error {
    constructor(serviceName: string) {
        super(`${serviceName} not set!`);
    }
}

class Services {

    private _themeService?: IThemeService;
    private _authService?: IAuthService;

    get themeService(): IThemeService {
        if (this._themeService === undefined) {
            throw new ServiceError("Theme Service")
        }
        return this._themeService;
    }

    set themeService(value: IThemeService) {
        this._themeService = value;
    }

    get authService(): IAuthService {
        if (this._authService === undefined) {
            throw new ServiceError("Auth Service")
        }
        return this._authService;
    }

    set authService(value: IAuthService) {
        this._authService = value;
    }
}

const services = new Services();
export default services;
