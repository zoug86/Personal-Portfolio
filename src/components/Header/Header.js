import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, NearMeRounded } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CustomButton from "../Button/Button";

//styles
import './Header.css';

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="header">
            {/* Home Link */}
            <Nav.Link as={NavLink} to='/' className="header-home-navlink">
                <Navbar.Brand className="header-home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="header-left">
                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to="/Resume" className={pathName === "/Resume" ? "header-link-active" : "header-link"}>Resume</Nav.Link>
                    {/* Portfolio Link */}
                    <Nav.Link as={NavLink} to="/Portfolio" className={pathName === "/Portfolio" ? "header-link-active" : "header-link"}>Portfolio</Nav.Link>
                    {/* Contact Link */}
                    <Nav.Link as={NavLink} to="/Contact" className={pathName === "/Contact" ? "header-link-active" : "header-link"}>Contact</Nav.Link>
                </Nav>
                <div className="header-right">
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target="_blank" rel="noreferrer" >{resumeData.socials[key].icon}</a>
                    ))}
                    <CustomButton text={"Hire Me"} icon={<NearMeRounded />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
