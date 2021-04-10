import React from 'react';
import ReactDom from 'react-dom';

import './SideDrawer.css';

export default function BackDrop(props) {

    if (!props.display) return null;

    return ReactDom.createPortal(
        <div className="side-drawer-back-drop" onClick={props.onClick}>
            
        </div>, document.getElementById('portal')
    )
}
