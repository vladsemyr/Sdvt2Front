import {DashboardPropsItem} from "./dashboard-props-item";

interface DashboardProps {
    header?: string,
    items: DashboardPropsItem[]
}

export type {DashboardProps};