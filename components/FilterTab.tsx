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
        <button className={props.currentTab === props.tabOption ? "tab selected-tab m-1 p-1 font-sans font-thin" : "tab not-selected-tab m-1 p-1 font-sans font-thin"} onClick={onTabClick} children={props.text}/>
    )
};

export default FilterTab