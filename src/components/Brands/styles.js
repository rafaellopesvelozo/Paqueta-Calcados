import styled from "styled-components";

export const BrandsContainer = styled.section``;

export const Logomarcas = styled.div`
  padding: 10%;

  h3 {
    font-size: 30px;
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 20px;
    }
  }
`;

export const Logotipos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 100px;

  img:nth-child(1) {
    max-width: 100px;
    @media (min-width: 768px) and (max-width: 991px) {
      max-width: 50px;
    }
  }
  img:nth-child(2) {
    max-width: 200px;
    height: 40px;
    @media (min-width: 768px) and (max-width: 991px) {
      max-width: 150px;
      height: 25px;
    }
  }
  img:nth-child(3),
  img:nth-child(4) {
    max-width: 200px;
    @media (min-width: 768px) and (max-width: 991px) {
      max-width: 100px;
      height: 25px;
    }
  }
`;

export const Formulário = styled.div`
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

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 25px;
    }
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 350px;
    p {
      font-size: 12px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #ffffff;
  }

  .btn-form {
    button {
      width: 45%;
      background: linear-gradient(to bottom, #f99500, #ffcd29 100%);
      @media (min-width: 768px) and (max-width: 991px) {
        font-size: 12px;
      }
    }
  }
`;

export const ContainerIputEmail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  input[type="text"]::placeholder,
  input[type="email"]::placeholder {
    color: #ffffff;

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  color: #ffffff;
  padding-left: 10px;
  background-color: transparent;
  border-bottom: 1px solid #ffffff;

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 160px;
  }
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
  display: flex;
 

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
    outline: none;
    border: none;
  }
`;
