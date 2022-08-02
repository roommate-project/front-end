import styled from 'styled-components';

export const FooterDiv = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 30px;
  color: ${props => props.theme.mainGrey};
`;

export const FooterSeat = styled.footer`
  height: 30px;
  position: relative;
  transform: translateY(-100%);
`;

export const FooterTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 10px;
`;

export const FooterCategory = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;

export const FooterContent = styled.p`
  margin: 10px;
  font-size: 12px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
