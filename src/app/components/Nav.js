import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
const NavC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand tag={Link} to="/" >Wellness Center</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar> 
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                IV-Drip
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/vitamin-c">
                  VITAMIN C IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/immune-booster">
                  IMMUNE BOOSTER IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/glutathione">
                  GLUTATHIONE IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/anti-aging">
                  ANTI-AGING IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/weight-management">
                  WEIGHT MANAGEMENT IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/jet-lag">
                  JET LAG IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/hangover">
                  HANGOVER IV-DRIP
                </DropdownItem>
                <DropdownItem tag={Link} to="/pms">
                  PMS IV-DRIP
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Therapies
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem tag={Link} to="/ubi-therapy">
              UBI THERAPY
                </DropdownItem>
                <DropdownItem tag={Link} to="/ozone-therapy">
                Ozone Therapy
                </DropdownItem>
                <DropdownItem tag={Link} to="/ozone-therapy-uv-light">
                OZONE THERAPY + UV LIGHT
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Other Services
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem tag={Link} to="/regenerative-medicine-stem-cell">
              Regenerative Medicine (Stem Cell)
                </DropdownItem>
                <DropdownItem tag={Link} to="/prp-platelet-rich-plasma">
                PRP (Platelet Rich Plasma)
                </DropdownItem>
                <DropdownItem tag={Link} to="/orthopedic-joint-treatments">
                Orthopedic Joint Treatments
                </DropdownItem>
                <DropdownItem tag={Link} to="/reversing-arthritis">
                Reversing Arthritis
                </DropdownItem>
                <DropdownItem tag={Link} to="/peripheral-neuropathy">
                Peripheral Neuropathy
                </DropdownItem>
                <DropdownItem tag={Link} to="/hair-growth">
                Hair Growth
                </DropdownItem>
                <DropdownItem tag={Link} to="/allergy-elimination">
                ALLERGY ELIMINATION 
                </DropdownItem>
                <DropdownItem tag={Link} to="/chronic-conditions">
                CHRONIC CONDITIONS
                </DropdownItem>
                <DropdownItem tag={Link} to="/chiropractic">
                CHIROPRACTIC
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Team
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem tag={Link} to="/the-beverly-hills-wellness-center-team">
              The Beverly Hills Wellness Center Team
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavC;
