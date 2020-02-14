import React from 'react';

const PageDividedSecondContentScrollable = ({first, second, className}) => {
    return (
        <div className={`page-divided-with-second-content-scrolable ${className}`}>
            <div className={'first-content'}>{first}</div>
            <div className={'second-content'}>{second}</div>
        </div>
    );
};

export default PageDividedSecondContentScrollable;