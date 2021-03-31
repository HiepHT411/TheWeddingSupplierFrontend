import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { DeviceSize } from "./navbarConfigDevice";
import { MobileNavLinks } from "./MobileNavLinks";
import {Icons} from "./Icons";
import SearchBar from "../SearchBar/SearchBar";

const NavbarContainer = styled.div`
  position: fixed;
  top: 30px;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  overflow:hidden;
  z-index: 9696;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

const SearchBarSection = styled.div`
  top: 1300px;
  display: flex;
  z-index: 9999;
  position: fixed;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  //const openSearchBar;

  return (
    <div>
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Icons />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
     
    </NavbarContainer>
    {/* <SearchBarSection>
        <SearchBar/>
    </SearchBarSection> */}
    </div>
  );
}   