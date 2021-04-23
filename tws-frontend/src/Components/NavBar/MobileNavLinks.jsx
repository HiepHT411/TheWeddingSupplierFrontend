import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "./Icons";
import { MenuToggle } from "./MenuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 9999
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;



export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Trang chủ</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/collections/all">Sản phẩm</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/intro">Giới thiệu</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/blog/news">Bài viết</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/contact">Liên hệ</Link>
          </LinkItem>
          <Marginer />

          <Icons/>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}