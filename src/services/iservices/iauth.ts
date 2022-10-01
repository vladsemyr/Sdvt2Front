import {IService} from "./iservice";

interface IAuthService extends IService {
    isAuthorized(): boolean,
}

export type {IAuthService};