import styled from "styled-components";

export const BrandsContainer = styled.section`
  .logomarcas {
    padding: 10%;
    h3 {
      font-size: 30px;
    }
    .logotipos {
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
    }
  }

  .formulário {
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
  }

  .Email {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      color: #ffffff;
    }
    .input-form {
      display: flex;
      form {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
