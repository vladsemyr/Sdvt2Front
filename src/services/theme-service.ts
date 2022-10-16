import { Theme } from "../static/themes";
import { IThemeService } from "./iservices/itheme-service";

class ThemeService implements IThemeService {
    private theme: Theme;

    getTheme(): Theme {
        return this.theme;
    }

    setTheme(theme: Theme): void {
        document.documentElement.classList.remove(this.theme);
        this.theme = theme;
        ThemeService.setPreferredTheme(theme);
    }

    private static getPreferredTheme(): Theme {
        switch (localStorage.theme) {
            case "dark": return Theme.Dark;
            case "light": return Theme.Light;
        }

        if (!('theme' in localStorage)) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return Theme.Dark;
            }
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return Theme.Light;
            }
        }

        return Theme.Default;
    }

    private static setPreferredTheme(theme: Theme) {
        document.documentElement.classList.add(theme);
        localStorage.theme = theme;
    }

    constructor() {
        this.theme = ThemeService.getPreferredTheme();
        ThemeService.setPreferredTheme(this.theme);
    }
}

export {Theme};
export default ThemeService;
export type {IThemeService};