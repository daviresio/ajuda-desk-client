import React, {useState} from 'react';
import Row from "./Row";

const TabMenu = ({tabs, selected}) => {

    const [active, setActive] = useState(0)

    const changeItem = i => {
        setActive(i)
        if(selected) selected(i)
    }

    return (
        <Row className={'tab-menu'} noSpace>
            {tabs && tabs.map((v, i) =>
                <div key={i} className={active === i ? 'tab tab-active' : 'tab'} onClick={() => changeItem(i)}>
                    {v}
                </div>)}
        </Row>
    )
}

export default TabMenu;