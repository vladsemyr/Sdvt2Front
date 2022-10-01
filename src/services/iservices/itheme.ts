import {Theme} from "../theme";
import {IService} from "./iservice";


interface IThemeService extends IService {
    getTheme: () => Theme,
    setTheme: (theme: Theme) => void
}

export type {IThemeService};