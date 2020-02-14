import React from 'react';

const Table = ({header, rows}) => {
    return (
        <table className={'table'}>
            <thead>
            {header}
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
};

export default Table;