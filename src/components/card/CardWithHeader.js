import React from 'react';

const CardWithHeader = ({header, children, className}) => {
    return (
        <div className={className ? className.concat(' card-com-header') : 'card-com-header'}>
            <div className={'card-header'}>
                {header}
            </div>
            <div className={'card-body'}>
                {children}
            </div>
        </div>
    );
};

export default CardWithHeader;