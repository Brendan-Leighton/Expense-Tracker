import React from 'react';
import ReactDom from 'react-dom';

import './SideDrawer.css';
//  ICONS
import { CgCloseO} from 'react-icons/cg'

export default function SideDrawer(props) {

    if (!props.open) return null;

    // 
    return ReactDom.createPortal(
        <div className="side-drawer">
            <button className="close-drawer" onClick={props.onClick}>
                <CgCloseO />
            </button>
            {props.mapLinks}
        </div>
        , document.getElementById('portal')
    )
}
