import styled from 'styled-components';

export const MyPageTopBackground = styled.div`
  background-color: ${props => props.theme.mainYellow};
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
`;

export const MyPageRepresentiveImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-top: 90px;
  z-index: 10;
`;

export const MyPageBackground = styled.div`
  background-color: ${props => props.theme.mainWhite};
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: start;
  flex-direction: column;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px 15px 0 0;
`;

export const MyPageBasicInfo = styled.p`
  font-size: 20px;
`;

export const MyPageBasicInfoBox = styled('div')<{ marginTop: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${props => props.marginTop};
  padding: 10px;
  width: 100%;
`;

export const MyPageMenuButton = styled('div')<{ menuSelected: boolean }>`
  padding: 10px;
  background-color: ${props =>
    props.menuSelected ? props.theme.mainPink : props.theme.mainWhite};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.mainBlack};
  font-size: 18px;
  min-width: 33%;
  height: 50px;
  margin: 5px;
  cursor: pointer;
`;
