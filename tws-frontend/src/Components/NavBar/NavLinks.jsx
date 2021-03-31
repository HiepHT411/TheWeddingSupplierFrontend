import React from "react";
import styled from "styled-components";
import UserService from "../AccountComponent/UserService";
// import {
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
// } from 'styled-components';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: inherit;
  &:hover {
    color: rgb(79, 197, 79);
  }
`;

function getPublicContent(){
  UserService.getPublicContent().then(res=>{
    if(res.data  == "publicContent"){
      this.props.history.push('/intro');
    }
  });
}

export function NavLinks(props) {
  //const [hidden, setHidden] = useState(true);

  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/collections/all">Production</Link>
        </LinkItem>
        <LinkItem>
            <Link role="button" onClick={getPublicContent} >Introduction</Link>
            {/* <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown Button
      </Button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Action after divider</DropdownItem>
      </DropdownMenu> */}
        </LinkItem>
        <LinkItem>
          <Link href="/blog/news">Blog</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/contact">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}