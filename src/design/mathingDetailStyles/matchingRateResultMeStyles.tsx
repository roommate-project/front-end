import styled from 'styled-components';

export const DetailTestDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailPageResultCard = styled.div<{ isMatching: boolean }>`
  width: 250px;
  min-width: 250px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  background-color: ${props =>
    props.isMatching ? props.theme.backgroundGrey : props.theme.mainRed};
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
`;

export const ResultCardQuestion = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
  paddig: 10px;
`;

export const ResultCardAnswer = styled.p`
  font-size: 14px;
  padding: 5px;
`;

export const ResultCardMessage = styled.p`
  font-size: 14px;
  padding: 5px;
`;
