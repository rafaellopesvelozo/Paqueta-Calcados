import styled from "styled-components";

export const Outlet = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 7% 10%;
  article {
    display: flex;
    gap: 20px;
    align-items: center;

    .outlet-info-woman {
      display: flex;
      flex-direction: column;
      align-items: end;

      p {
        text-align: right;
        font-family: "Montserrat", sans-serif;
        span {
          font-weight: 600;
        }
      }
      Button {
        margin-top: 30px;
      }
    }
    .outlet-info-man {
      display: flex;
      flex-direction: column;
      p {
        font-family: "Montserrat", sans-serif;
      }
      Button {
        margin-top: 30px;
      }
    }
  }
  .gradient-woman,
  .gradient-man {
    position: relative;
    height: 400px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }

    .gradientWoman,
    .gradientMan {
      position: absolute;
      flex-direction: column;
      top: 0;
      height: 100%;
      width: 100%;
    }
    .gradientWoman {
      display: flex;
      justify-content: flex-end;
      background: linear-gradient(90deg, #f57002 0%, transparent 100%);
      padding: 0 0 30px 30px;
      color: #ffff;
      font-size: 48px;
      text-shadow: 0.1rem 0.1rem 0.2rem #000;
    }
    .gradientMan {
      display: flex;
      justify-content: flex-end;
      align-items: self-end;
      background: linear-gradient(90deg, transparent 0%, #f57002 100%);
      padding: 0 30px 30px 0;
      color: #ffff;
      font-size: 48px;
      text-shadow: 0.1rem 0.1rem 0.2rem #000;
    }
  }

  .Paqueta-Outlet {
    .row {
      height: 2px;
      width: 100%;
      background-color: #383838;
      margin: 0 auto;
    }
    .paqueta-Outlet-info {
      padding: 7% 0 2% 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .paqueta-Outlet-logo {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p {
          font-size: 40px;
          font-family: "Poppins", sans-serif;
          font-weight: 800;
          color: #f57002;
        }
      }
    }
    .Paqueta-outlet-text {
      p {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-family: "Montserrat", sans-serif;
        span {
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
`;
