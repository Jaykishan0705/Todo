import React, {useCallback} from "react";

interface IFilterTabProps {
    tabOption: string;
    text: string;
    onTabChange: (tab: string)=>void
}

const FilterTab: React.FC<IFilterTabProps> = (
        props: IFilterTabProps
): JSX.Element => {
    const {onTabChange} = props; //change

    const onTabClick = useCallback(()=>onTabChange(props.tabOption),[onTabChange]);

    return (
        <button onClick={onTabClick}>
            {props.text}
        </button>
    )
};

export default FilterTab