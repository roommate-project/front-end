import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MyLikeListGridBox = styled('div')<{ len: number }>`
  display: grid;
  grid-template-rows: repeat(${props => props.len}, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-items: center;
  width: 100%;
`;

export const EmptyLikeList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 500px);
  font-size: 16px;
`;

export const MyLikeListBox = styled.div`
  position: relative;
  display: flex;
`;

export const MyLikeListImg = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 16px;
  object-fit: cover;
`;

export const MyLikeListHeartButton = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 20px;
  right: 10px;
  top: 5px;
  z-index: 0;
  color: ${props => props.theme.mainRed};
`;

export const MyLikeListInfo = styled.p`
  bottom: 10px;
  position: absolute;
  color: ${props => props.theme.mainWhite};
  font-size: 16px;
  width: 100%;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
`;
