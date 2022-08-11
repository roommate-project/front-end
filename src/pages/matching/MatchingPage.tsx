import { PageContainer } from 'design/commonStyles';
import styled from 'styled-components';
import MatchingCardInfo from './MatchingCardInfo';
import MatchingStack from './MatchingStack';

const Wrapper = styled(MatchingStack)`
  background-color: red;
`;

function MatchingPage() {
  return (
    <PageContainer>
      <Wrapper onMove={() => {}}>
        <MatchingCardInfo />
      </Wrapper>
    </PageContainer>
  );
}

export default MatchingPage;
