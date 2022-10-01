import services from "../../services/services";
import {useEffect, useState} from "react";
import {Theme} from "../../static/themes";
import {BsFillMoonFill, BsSunFill} from "react-icons/bs";
import {IconContext} from "react-icons";

const themeIconMap = {
    [Theme.Dark]: BsSunFill,
    [Theme.Light]: BsFillMoonFill,
}

/**
 * Theme switch element
 * @param size
 * @constructor
 */
function ThemeSwitch({size}: { size?: string }) {
    const [theme, setTheme] = useState(services.themeService.getTheme());

    const onClick = () => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    }

    useEffect(() => {
        services.themeService.setTheme(theme);
    }, [theme]);

    return (
        <button onClick={onClick} className="m-1">
            <IconContext.Provider value={{size: size}}>
                <div className="p-2 rounded-xl hover:bg-gray-400/20 active:ring ring-cyan-400/50">
                    {
                        themeIconMap[theme]({})
                    }
                </div>
            </IconContext.Provider>
        </button>

    )
}

export default ThemeSwitch;