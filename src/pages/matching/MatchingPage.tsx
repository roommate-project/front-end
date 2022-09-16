import { PageContainer } from 'design/commonStyles';
import styled from 'styled-components';
import MatchingStack from 'pages/matching/MatchingStack';
import MatchingFilter from './MatchingFilter';
import { useMatch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Stack = styled(MatchingStack)`
  background-color: red;
`;

function MatchingPage() {
  const isMain = useMatch('/');
  const [filter, setFilter] = useState({
    room4: 0,
  });

  return (
    <PageContainer>
      {isMain?.pathname === '/' ? (
        <Stack filter={filter} children />
      ) : (
        <AnimatePresence>
          <MatchingFilter setFilter={setFilter} />
        </AnimatePresence>
      )}
    </PageContainer>
  );
}

export default MatchingPage;
