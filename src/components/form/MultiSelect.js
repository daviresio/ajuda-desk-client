import React from 'react';
import Linq from "../Linq";
import Select from "react-select";

const MultiSelect = ({options = [], field, ...props}) => {

    return (
        <Select isMulti
                components={{ClearIndicator}}
                options={options}
            {...field}
        />
    );
};

export default MultiSelect;


const ClearIndicator = props => {
    const {
        children = <Linq>Limpar</Linq>,
        getStyles,
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div
            {...restInnerProps}
            ref={ref}
            style={getStyles('clearIndicator', props)}
        >
            <div style={{ padding: '0px 5px' }}>{children}</div>
        </div>
    );
};