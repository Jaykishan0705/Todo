import React from "react";
import FilterTab from "./FilterTab";
import {VISIBILLITY_FILTERS} from "./visibilityFilter";

const {SHOW_ALL, ACTIVE, COMPLETED} = VISIBILLITY_FILTERS;

interface FilterTabPanelProps {
    onTabChange: (tab: string) => void
}

const FilterTabPanel: React.FC<FilterTabPanelProps> = (props: FilterTabPanelProps) => {
    return (
        <>
            <FilterTab tab={SHOW_ALL} text={"All"} onTabChange={props.onTabChange}/>
            <FilterTab tab={ACTIVE} text={"Active"} onTabChange={props.onTabChange}/>
            <FilterTab tab={COMPLETED} text={"Completed"} onTabChange={props.onTabChange}/>
        </>
    )
};

export default FilterTabPanel
