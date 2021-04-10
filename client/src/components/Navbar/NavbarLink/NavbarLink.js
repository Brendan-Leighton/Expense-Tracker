import React from 'react';
import { Link } from 'react-scroll';

//  STYLE imports
import './NavbarLink.css';

export default function NavbarLink(props) {

    if (props.sideDrawer) {
        return (
            <div className="side-drawer-links">
                <Link
                    className="nav-link"
                    to={props.id}
                    smooth="true"
                    duration={500}
                    offset={-50}
                    onClick={props.onClick}
                >{props.name}
                </Link>
            </div>
        )
    }

    return (
        <Link
            className="nav-link"
            to={props.id}
            smooth="true"
            duration={500}
            offset={-45}
        >{props.name}
        </Link>
    )
}
