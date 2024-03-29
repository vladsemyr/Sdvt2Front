import DashboardHeader from "./dashboard-header";
import DashboardItem from "./dashboard-item";
import {ISidebarItem} from "../../role-routes/utility/isidebar-item";

function Dashboard(props: {
    header?: string,
    items: ISidebarItem[]
}) {
    return (
        <ul className="space-y-2">
            {
                props.header &&
                <DashboardHeader header={props.header}/>
            }
            {
                props.items.map((item, key) => (
                    <DashboardItem name={item.name} icon={item.icon} navigate={item.navigate} key={key}/>
                ))
            }
        </ul>
    )
}

export default Dashboard;