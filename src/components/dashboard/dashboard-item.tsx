import {useNavigate} from "react-router-dom";
import React from "react";

function DashboardItem({name, icon, navigate: link}: { name: string, icon?: JSX.Element, navigate: string }) {
    const navigate = useNavigate();

    const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault()
        navigate(link);
    };

    return (
        <li>
            <a href={link} onClick={onClick}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                {icon && <div>{icon}</div>}
                <div className="flex-1 ml-3 whitespace-nowrap text-left truncate">{name}</div>
            </a>
        </li>
    )
}

export default DashboardItem;