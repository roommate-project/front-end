import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.mainWhite};
`;

export const SubmitBtn = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  font-size: 18px;
  line-height: 48px;
  ${props =>
    props.disabled
      ? { backgroundColor: props.theme.mainGrey }
      : { backgroundImage: props.theme.mainGradient }}
  color: ${props => props.theme.mainWhite};
`;

export const NextBtn = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
`;

export const Title = styled.h1`
  p {
    text-align: center;
    line-height: 32px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 300;
    color: ${props => props.theme.mainBlack};
  }
  span {
    color: ${props => props.theme.mainRed};
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  border: solid 2px ${props => props.theme.mainGrey};
  font-size: 18px;
  line-height: 48px;
  padding: 0px 16px;
  &:focus {
    outline-color: ${props => props.theme.mainRed};
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-left: 10px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  span {
    font-size: 18px;
    color: ${props => props.theme.mainRed};
  }
`;
