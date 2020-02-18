import React from "react";
import FilterTab from "./FilterTab";
import {VISIBILLITY_FILTERS} from "./visibilityFilter";

const {SHOW_ALL, ACTIVE, COMPLETED} = VISIBILLITY_FILTERS;

interface Props {
    onTabChange: (tab: string) => void
}

const FilterTabPanel: React.FC<Props> = (props: Props) => {
    return (
        <>
            <FilterTab tab={SHOW_ALL} buttonText={"All"} onTabChange={props.onTabChange}/>
            <FilterTab tab={ACTIVE} buttonText={"Active"} onTabChange={props.onTabChange}/>
            <FilterTab tab={COMPLETED} buttonText={"Completed"} onTabChange={props.onTabChange}/>
        </>
    )
};

export default FilterTabPanel
