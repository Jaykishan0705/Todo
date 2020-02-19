import React from "react";
import FilterTab from "./FilterTab";
import {POSSIBLR_VISIBILLITY_FILTERS} from "../Constants/visibilityFilter";

const {SHOW_ALL, ACTIVE, COMPLETED} = POSSIBLR_VISIBILLITY_FILTERS;

interface IFilterTabPanelProps {
    onTabChange: (tab: string) => void
}

const FilterTabPanel: React.FC<IFilterTabPanelProps> = (props: IFilterTabPanelProps) => {

    const tabs = [
        {
            tabOption: SHOW_ALL,
            text: "All",
        },
        {
            tabOption: ACTIVE,
            text: "Active"
        },
        {
            tabOption: COMPLETED,
            text: "Completed"
        }
    ];
    return (
        <>
            {tabs.map(tab => < FilterTab tabOption={tab.tabOption} text={tab.text} onTabChange={props.onTabChange} />)}
        </>
    )
};

export default FilterTabPanel;


