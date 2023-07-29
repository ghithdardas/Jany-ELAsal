import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../images/logoo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Home.css";

const Container = styled.div`
  background-color: #cd986f;
  height: 96px;
  position: sticky;
  top: 0;
  z-index: 1001;
  width: 100%;

  @media screen and (max-width: 640px) {
  }
`;

const Wrapper = styled.div`
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 15%;
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  flex: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-top: 6px;
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #cd986f;
    direction: ltr;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    top: 10;
    position: absolute;
    left: ${({ click }) => (click ? 0 : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #cd986f;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 13px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavItem = styled.li`
  height: 60px;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: block;
  }
  @media screen and (max-width: 540px) {
    margin-right: 70px;
  }
`;
const NavLinks = styled.a`
  color: #1b2e2f;
  display: flex;

  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  height: 100%;

  &:hover {
    color: #fff;
    font-size: 1.3rem;
    border-bottom: 5px solid #fff;
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    align-items: center;
    padding: 2rem;
    display: block;
    &:hover {
      color: #35434c;
      transition: all 0.4s ease-out;
      border-bottom: none;
    }
  }

  @media screen and (max-width: 54px) {
    text-align: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #35434c;
      transition: all 0.4s ease-out;
      border-bottom: none;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Container>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Wrapper>
          <Left>
            <Link to="/">
              <Logo src={logoImage}></Logo>
            </Link>
          </Left>
          <Right>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <NavLinks id="con">تواصـل مـعـنـا</NavLinks>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/who-are-we" style={{ textDecoration: "none" }}>
                  <NavLinks>مـن نـحـن</NavLinks>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/steps" style={{ textDecoration: "none" }}>
                  <NavLinks>مراحل جني العسل</NavLinks>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <NavLinks>الـصـفـحـة الرئـيـسـيـة</NavLinks>
                </Link>
              </NavItem>
            </NavMenu>
          </Right>
        </Wrapper>
      </IconContext.Provider>
    </Container>
  );
};

export default Navbar;
