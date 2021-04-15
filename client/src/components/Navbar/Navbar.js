import React from 'react';
//  COMPONENTS
import NavbarLink from './NavbarLink/NavbarLink';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './SideDrawer/BackDrop';
//  STYLESHEET
import './Navbar.css';
//  FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { GiTakeMyMoney } from 'react-icons/gi';

export default function Navbar() {


    const [displaySideDrawer, setDisplaySideDrawer] = React.useState(false);

    const toggleSideDrawer = () => {
        setDisplaySideDrawer(prevState => !prevState);
    }

    const hamburgerMenu = <FontAwesomeIcon icon={faBars} />

    const logoStyles = {
        color: "white",
        fontSize: "2rem"
    }

    const navbarLinkData = [
        {
            name: "Learn Why",
            id: "scroll-learn-why"
        },
        {
            name: "Reviews",
            id: "scroll-testimonials"
        },
        {
            name: "Pricing",
            id: "scroll-pricing"
        },
    ]

    const mapLinks = () => {
        return navbarLinkData.map((links, index) => {
            return (
                <NavbarLink
                    name={links.name}
                    id={links.id}
                    key={index}
                    sideDrawer={displaySideDrawer}
                    onClick={toggleSideDrawer}
                />
            )
        })
    }


    return (
        <nav id="navbar">
            <a href="#top">
                <GiTakeMyMoney className="nav-link" style={logoStyles} />
            </a>
            <span className="nav-links">
                {mapLinks()}
            </span>
            <button className="fa-bars-button" onClick={toggleSideDrawer}>
                {hamburgerMenu}
            </button>
            <SideDrawer
                links={navbarLinkData}
                mapLinks={mapLinks()}
                open={displaySideDrawer}
                onClick={toggleSideDrawer}
            />
            <BackDrop
                display={displaySideDrawer}
                onClick={toggleSideDrawer}
            />
        </nav>
    )
}
