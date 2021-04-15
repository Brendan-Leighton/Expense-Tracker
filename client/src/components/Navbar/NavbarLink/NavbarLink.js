import React from 'react';

//  STYLE imports
import './NavbarLink.css';

export default function NavbarLink(props) {

    if (props.sideDrawer) {
        return (
            <div className="side-drawer-links">
                <a
                    className="nav-link"
                    href={`#${props.id}`}
                    onClick={props.onClick}
                >{props.name}
                </a>
            </div>
        )
    }

    return (
        <a
            className="nav-link"
            href={`#${props.id}`}
        >{props.name}
        </a>
    )
}
