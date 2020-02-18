import React, {useCallback} from "react";

interface Props {
    tab: string;
    buttonText: string
    onTabChange: (tab: string)=>void
}

const FilterTab: React.FC<Props> = (
        props: Props
): JSX.Element => {
    const {onTabChange} = props;

    const tabChange = useCallback(()=>onTabChange(props.tab),[onTabChange]);

    return (
        <button onClick={tabChange}>
            {props.buttonText}
        </button>
    )
};

export default FilterTab