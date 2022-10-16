import styled from 'styled-components';

export const FooterDiv = styled.div<{ visible: boolean }>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  height: auto;
  min-height: 100%;
  padding-bottom: 60px;
  color: ${props => props.theme.mainGrey};
  flex-direction: column;
  gap: 10px;
`;

export const FooterTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;

export const FooterCategory = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;

export const FooterContent = styled.p`
  margin: 10px;
  font-size: 12px;
  text-align: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
