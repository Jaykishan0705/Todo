import React from "react";
import FilterTab from "./FilterTab";
import {POSSIBLR_VISIBILLITY_FILTERS} from "../constants/visibilityFilter";

const {SHOW_ALL, ACTIVE, COMPLETED} = POSSIBLR_VISIBILLITY_FILTERS;

interface IFilterTabPanelProps {
    onTabChange: (tab: string) => void;
    currentTab: string
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
        <div className="flex justify-evenly items-center w-4/12">
            {tabs.map(tab => <FilterTab tabOption={tab.tabOption} text={tab.text} onTabChange={props.onTabChange} currentTab={props.currentTab} />)}
        </div>
    )
};

export default FilterTabPanel


