import styled from 'styled-components';

// escd 
 export const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   border: 2px solid grey;
   border-radius: 1rem;
   padding: 1rem;
   box-shadow: 3px 5px 5px rgba(26, 25, 25, 0.551);
   transition: all 0.5s;
   :hover {
     transform: scale(0.97);
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.027);
   }
 `;

 export const Button = styled.button`
 :hover{
  background-color: #959997;
  color: white;
 }
 `;
 




