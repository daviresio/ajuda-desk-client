import React from 'react';
import Row from "./Row";
import { push } from 'connected-react-router'
import {connect} from "react-redux";

const TabMenu = ({tabs, navigate}) => {

    const handleClick = i => {
        navigate(tabs[i].route)
    }

    return (
        <Row className={'tab-menu'} noSpace>
            {tabs && tabs.map((v, i) =>
                <div key={i} className={v.active ? 'tab tab-active' : 'tab'} onClick={() => handleClick(i)}>{v.label}</div>)}
        </Row>
    )
}

export default connect(null, dispatch => ({navigate: (v) => dispatch(push(v))}))(TabMenu);