import { PageContainer } from 'design/commonStyles';
import styled from 'styled-components';
import MatchingStack from 'pages/matching/MatchingStack';

const Stack = styled(MatchingStack)`
  background-color: red;
`;

function MatchingPage() {
  return (
    <PageContainer>
      <Stack />
    </PageContainer>
  );
}

export default MatchingPage;
