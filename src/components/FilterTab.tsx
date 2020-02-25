import React, {useCallback} from "react";

interface IFilterTabProps {
    tabOption: string;
    text: string;
    onTabChange: (tab: string)=>void;
    currentTab: string;
}

const FilterTab: React.FC<IFilterTabProps> = (
        props: IFilterTabProps
): JSX.Element => {
    const {onTabChange} = props;

    const onTabClick = useCallback(()=>onTabChange(props.tabOption),[onTabChange]);

    return (
        <button className={props.currentTab === props.tabOption ? "tab selected-tab" : "tab not-selected-tab"} onClick={onTabClick} children={props.text} />
    )
};

export default FilterTab