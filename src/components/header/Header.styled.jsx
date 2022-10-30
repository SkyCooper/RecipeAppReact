import styled from "styled-components";

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
  `;

  export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;

    h2{
      text-align: center;
      padding: 1rem 0;
    }
  `;

  
  
  export const Form = styled.form`
    display: flex;
    gap: 1rem;
    input,
    select,
    button {
      width: 200px;
      border-radius: 20px;
      cursor: pointer;
      height: 50px;
    }

  `;
  export const CardDiv = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    input,
    select,
    button {
      width: 200px;
      border-radius: 20px;
      cursor: pointer;
      height: 50px;
    }

  `;
  
 
  