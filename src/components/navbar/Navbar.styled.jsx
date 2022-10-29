import styled from "styled-components";

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkDiv = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  li {
    padding: 1rem;
  }
`;
