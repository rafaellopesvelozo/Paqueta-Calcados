import styled from "styled-components";

export const Section = styled.section`
  padding: 0 10%;
  height: 163px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #ff8a29, #cf5d00);
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: clamp(0.325rem, 1.08vw, 0.813rem);
    color: #ffff;
    margin: 0;
  }
`;
export const TextCapsLock = styled.p`
  font-weight: 700;
`;
export const Icons = styled.div`
  display: flex;

  i {
    font-size: 35px;
    color: #ffffff;
    margin: 0 auto;

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 22px;
    }
  }
`;
