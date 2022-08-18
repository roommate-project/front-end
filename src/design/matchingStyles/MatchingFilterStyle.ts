import styled from 'styled-components';

export const FilterModalContainer = styled.div`
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
  position: fixed;
  bottom: 100px;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border-style: none;
  font-size: 18px;
  line-height: 48px;
  background-color: ${props => props.theme.mainRed};
  color: ${props => props.theme.mainWhite};
  margin-top: 20px;
`;
