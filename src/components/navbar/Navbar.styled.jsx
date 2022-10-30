import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.header};
`;


export const Logo = styled.img`
  width: 150px;
  padding: 2rem;
  border-radius: 50%;
`;


export const LinkDiv = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  li {
    padding: 1rem;
    border: 1px solid black;
    border-radius: 15px;
    background-color:${({theme})=>theme.colors.button1} ;
    color: white;
  }
`;
