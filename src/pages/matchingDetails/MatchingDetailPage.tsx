import React from 'react';
import { PageContainer } from 'design/commonStyles';

function MatchingDetailPage() {
  return (
    <PageContainer>
      <div style={{ width: '100%' }}>
        <img
          src="https://image.kmib.co.kr/online_image/2020/0902/611817110014970749_1.jpg"
          alt="사진1"
          style={{ width: '100%', height: '45vh' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '50%',
            backgroundColor: '#ff0000',
            height: '38px',
            fontSize: '18px',
            border: '1px solid #000000',
          }}
        >
          유저 소개
        </div>
        <div
          style={{
            width: '50%',
            backgroundColor: '#ffffff',
            height: '38px',
            fontSize: '18px',
            border: '1px solid #000000',
          }}
        >
          집 소개
        </div>
      </div>
    </PageContainer>
  );
}

export default MatchingDetailPage;
