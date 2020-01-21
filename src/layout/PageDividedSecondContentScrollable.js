import React from 'react';

const PageDividedSecondContentScrollable = ({first, second}) => {
    return (
        <div className={'page-divided-with-second-content-scrolable'}>
            <div className={'first-content'}>{first}</div>
            <div className={'second-content'}>{second}</div>
        </div>
    );
};

export default PageDividedSecondContentScrollable;