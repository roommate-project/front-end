import styled from 'styled-components';

export const FilterModalContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  background-color: ${props => props.theme.backgroundGrey};
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterBox = styled.div`
  width: 100%;
  padding: 30px 20px;
  background-color: ${props => props.theme.mainWhite};
  font-size: 18px;
  font-weight: 500;
`;

export const FilterBtn = styled.button`
  bottom: 100px;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  font-size: 18px;
  line-height: 48px;
  background-color: ${props => props.theme.mainRed};
  color: ${props => props.theme.mainWhite};
`;

export const CheckBoxLabel = styled.label<{ isCheck: boolean }>`
  background-color: ${props =>
    props.isCheck ? props.theme.mainRed : props.theme.mainGrey};
  padding: 10px 20px;
  border-radius: 16px;
  color: ${props => props.theme.mainWhite};
  input[type='checkbox'] {
    width: 0px;
    height: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export const CheckBoxWrraper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
