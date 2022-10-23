import {ISessionService} from "./iservices/isession-service";
import {User} from "../interfaces/user";

const USER_STORAGE_KEY = "USER";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) => fetch(input, init).then(async res => {
    if (!res.ok) {
        throw new Error(await res.json())
    }
    return res.json()
})

class SessionService implements ISessionService {
    private readonly _user?: User;

    constructor() {
        const user = SessionService.getUser();
        this._user = user || undefined;

        setInterval(this.callback, 1000);
    }

    private static getUser(): User | undefined {
        const user_raw = localStorage.getItem(USER_STORAGE_KEY);
        if (!user_raw) {
            return undefined;
        }

        let user = undefined;
        try {
            user = JSON.parse(user_raw);
        } catch (e) {
            localStorage.removeItem(USER_STORAGE_KEY);
            return undefined;
        }

        if (!user) {
            localStorage.removeItem(USER_STORAGE_KEY);
            return undefined;
        }

        // TODO: check user properties

        return user as User;
    }

    private callback() {
        console.log("this user: ", JSON.stringify(this._user));
    }

    async login({phone, password}: {phone: string, password: string}): Promise<User> {
        return Promise.reject(undefined);
    }

    async logout(): Promise<void> {
        return Promise.reject(undefined);
    }

    async signUp({phone, password}: {phone: string, password: string}): Promise<User> {
        try {
            const json = await fetcher("/api/auth/register", {
                method: "POST",
                body: JSON.stringify({phone: phone, password: password}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return json as User;
        } catch (e) {
            throw e
        }
    }

    isAuthorized(): boolean {
        return !!this._user;
    }

}

export default SessionService;