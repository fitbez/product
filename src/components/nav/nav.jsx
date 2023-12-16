import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/product">
          <li>Products</li>
        </Link>
        <Link to="/add-product">
          <li>Add Product</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
