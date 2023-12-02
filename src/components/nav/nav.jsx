import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0rem 8rem;
  background-color: #11ccf4;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const Nav = () => {
  return (
    <StyledNav>
      <h2>Logo</h2>
      <StyledUl>
        <li>Home</li>
        <li>Products</li>
        <li>Login</li>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
