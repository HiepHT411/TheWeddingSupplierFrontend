import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: left;
`;


const LogoText = styled.h2`
  font-size: 28px;
  margin: 0;
  margin-top: 8px;
  margin-left: 8px;
  color: rgb(245, 81, 81);
  font-weight: bolder;
  letter-spacing: 1.5px;
`;

const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: rgb(24, 10, 70);
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <Link href='/'><LogoText>Cưới Hỏi FPT</LogoText></Link>
    </LogoWrapper>
  );
}