import {IThemeService} from "./theme";

class ServiceError extends Error {
    constructor(serviceName: string) {
        super(`${serviceName} not set!`);
    }
}

class Services {
    get themeService(): IThemeService {
        if (this._themeService === undefined) {
            throw new ServiceError("Theme Service")
        }
        return this._themeService;
    }

    set themeService(value: IThemeService) {
        this._themeService = value;
    }
    private _themeService?: IThemeService;
}

const services = new Services();
export default services;
