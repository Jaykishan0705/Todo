import React, {useCallback} from "react";

interface FilterTabProps {
    tab: string;
    text: string
    onTabChange: (tab: string)=>void
}

const FilterTab: React.FC<FilterTabProps> = (
        props: FilterTabProps
): JSX.Element => {
    const {onTabChange} = props; //change

    const onTabClick = useCallback(()=>onTabChange(props.tab),[onTabChange]);

    return (
        <button onClick={onTabClick}>
            {props.text}
        </button>
    )
};

export default FilterTab