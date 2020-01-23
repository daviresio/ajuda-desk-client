import React from 'react';

const Page = ({children}) => {
    return (
        <div className={'page no-scroll'}>
            {children}
        </div>
    );
};

export default Page;