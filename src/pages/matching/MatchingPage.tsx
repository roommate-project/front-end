import { PageContainer } from 'design/commonStyles';
import styled from 'styled-components';
import MatchingCardInfo from 'pages/matching/MatchingCardInfo';
import MatchingStack from 'pages/matching/MatchingStack';

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
