import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.mainWhite};
`;

export const ImgInput = styled.input`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 44px;
  transform: scale(2.1);
  line-height: 40px;
  opacity: 0;
`;
