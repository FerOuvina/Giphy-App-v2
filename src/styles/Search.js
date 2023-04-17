import styled from "@emotion/styled";

export const FormContainer = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0.6em;
  background-color: #18061f;
`;

export const FormContainer__Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer__FormSelect = styled.select`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.2rem 0;
  font-size: 1.2rem;
  width: 6%;
  border-radius: 10px 0 0 10px;
  background-color: white;
  border: 4px solid white;
`;

export const FormContainer__FormInput = styled.input`
  padding: 0.2rem 1rem;
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid white;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.11);
  color: black;

  ::placeholder {
    font-size: 1rem;
  }

  :focus {
    outline: 2px solid var(--cyan);
  }
`;

export const FormContainer__FormBtn__Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer__FormBtn__Btn = styled.button`
  font-size: 1.5rem;
  padding: 0.2rem;
  border-radius: 0 10px 10px 0;
  background-color: var(--purple);
  border: 1px solid white;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.11);
  color: black;

  :hover {
    background-color: var(--red);
    color: white;
  }

  :active {
    background: var(--lightRed);
    color: white;
  }
`;
