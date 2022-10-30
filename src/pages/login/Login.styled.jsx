import styled from 'styled-components';

//escd
export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50vh;
gap: 2rem;
`;

// escin
export const Input = styled.input`
padding: 1rem 2rem;
border-radius:15px;
`;

//escb
export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.button1};
  color: white;
  box-shadow: 3px 5px 5px rgba(26, 25, 25, 0.551);
  :active {
    transform: scale(0.95);
    color: black;
    background-color: #f66969;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.027);
  }
`;




