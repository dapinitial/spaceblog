import {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {APP_NAME} from '../config';
import {signout, isAuth} from '../actions/auth';

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
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen,
    setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/Signin">
                <NavLink className="d-inline-block">Signin</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/signup">
                <NavLink className="d-inline-block">Signup</NavLink>
              </Link>
            </NavItem>
            {isAuth() && (
              <NavItem>
                <NavLink
                  onClick={() => signout(() => Router.replace('/signin'))}
                  className="d-inline-block">Signout</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;