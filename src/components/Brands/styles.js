import styled from "styled-components";

export const BrandsContainer = styled.section``;

export const Logomarcas = styled.div`
  padding: 10%;

  h3 {
    font-size: 30px;
  }
`;

export const Logotipos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 100px;

  img:nth-child(1) {
    width: 100px;
  }
  img:nth-child(2) {
    max-width: 200px;
    height: 40px;
  }
  img:nth-child(3),
  img:nth-child(4) {
    max-width: 200px;
  }
`;

export const Formulário = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px 120px 50px 50px;
  background: linear-gradient(to right, #ff8a29 100%, #cf5d00);
  h3 {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-style: 700;
  }
`;

export const Email = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #ffffff;
  }
  .btn-form {
    button {
      max-width: 230px;
      background: linear-gradient(to bottom, #f99500, #ffcd29 100%);
    }
  }
`;

export const ContainerIputEmail = styled.div`
  display: flex;
  justify-content: space-between;

  input[type="text"]::placeholder,
  input[type="email"]::placeholder {
    color: #ffffff;
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;
  color: #ffffff;
  padding-left: 10px;
  background-color: transparent;
  border-bottom: 1px solid #ffffff;
`;
export const InputForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  fieldset {
    display: flex;
    gap: 30px;
  }
`;
export const Label = styled.label`
  color: #ffffff;

  input[type="checkbox"] {
    margin-right: 5px;
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px #000000;
  }
`;
