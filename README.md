<br />
<br />
<p align="center">
  <img src="src/assets/roommate.svg" height="48">
</p>
<br />
<br />
<h1>룸메이트 프로젝트</h1>
<blockquote>
  <p>성향 테스트를 통해 비슷한 생활습관을 가진 룸메이트를 찾아주는 서비스</p>
</blockquote>

<기획의도>

❓ 서울 거주 청년층의 주거 부담을 경감할 수 있는 방법이 없을까?<br />
❗️ 주거비용을 분담할 룸메이트를 찾아줄 수 있으면 좋겠다! <br />
💡 '룸메이트'는 생활반경과 생활패턴이 비슷한 룸메이트를 찾아주는 매칭서비스입니다.

<br />

<구현목표>

<ul>
  <li>생활 습관 테스트를 통해 나와 매칭률이 높은 사람을 필터링하여 확인할 수 있다.</li>
  <li>상세페이지에서 상대의 프로필과 집정보를 확인할 수 있다.</li>
  <li>원하는 상대방과 실시간 1:1채팅이 가능하다.</li>
</ul>

<br />
<br />
<h2>⏯ 프로젝트 실행</h2>
<ul>
  <li><a href="43.200.244.125">여기를 눌러 실행하기</a></li>
  <li>
  Git Hub으로 실행하기

      1. git clone https://github.com/roommate-project/front-end.git
      2. npm install
      3. npm start

  </li>
  <br />
  <li><a href="https://github.com/roommate-project/back-end">백엔드 Git Hub으로 이동하기</a></li>
</ul>

<br />
<br />
<h2>👩🏻‍💻🧑🏻‍💻 룸메이트 팀원</h2>
<table>
  <tr>
    <td colspan='2'>팀원</td>
    <td>깃허브 주소</td>
  </tr>
  <tr>
    <td rowspan='2'>FE Developer</td>
    <td>김원희</td>
    <td><a href="https://github.com/wooneeS2">https://github.com/wooneeS2</a></td>
  </tr>
  <tr>
    <td>박수진</td>
    <td><a href="https://github.com/s0ojin">https://github.com/s0ojin</a></td>
  </tr>
  <tr>
    <td rowspan='2'>BE Developer</td>
    <td>임서영</td>
    <td><a href="https://github.com/im-shung2">https://github.com/im-shung</a></td>
  </tr>
  <tr>
    <td>최재성</td>
    <td><a href="https://github.com/JessJess-Choi">https://github.com/JessJess-Choi</a></td>
  </tr>
</table>

<br />
<br />
<h2>🛠 프론트엔드 기술 스택</h2>
    <table>
      <tr>
          <td>기술</td>
          <td>선택한 이유</td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/React-white?&logo=React&logoColor=61DAFB"/></td>
          <td>
          - 팀원 모두가 사용가능한 프레임워크<br />
          - 컴포넌트화를 통해 재사용성이 높음
          </td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/TypeScript-white?&logo=TypeScript&logoColor=3178C6"/></td>
          <td>
          - 런타임 이전에 오류를 알 수 있음 <br />
          - 팀원들이 프로젝트를 통해 타입스크립트를 학습해보길 원함
          </td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/React Query-white?&logo=React Query&logoColor=FF4154"/></td>
          <td>
          - 서버사이드 상태관리 용이<br />
          - 서버 데이터 캐싱을 통해 불필요한 요청 최소화<br />
          - InfiniteQueries를 활용한 데이터 무한스크롤/페이지네이션 구현이 용이
          </td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/styled components-white?&logo=styled-components&logoColor=DB7093"/></td>
          <td>
          - 각자 다른 부분을 개발하기 때문에 class/id가 겹치는 문제를 최소화 <br />
          - css 커스텀 컴포넌트를 만들기 쉽고, 상속과 확장을 통해 재사용 용이<br />
          - js props에 영향받는 스타일 구현이 쉬움 
          </td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/React Hook Form-white?&logo=ReactHookForm&logoColor=EC5990"/></td>
          <td>
          - 코드 일관성 확보 및 단순화 <br />
          - 폼 상태관리 및 validation 용이 <br />
          - 재렌더링 최소화, 인풋 필드별 상태 업데이트 구독 용이<br/>
          </td>
      </tr>
      <tr>
          <td><img src="https://img.shields.io/badge/React Router-white?&logo=React Router&logoColor=CA4245"/></td>
          <td>- 새로고침없이 필요한 컴포넌트를 렌더링 하기 위함</td>
      </tr>
    </table>

<br />
<br />
<h2>🙋🏻‍♀️ 프론트엔드 역할 분담</h2>
<h3>김원희</h3>
  <ol>
    <li>로그인 구현</li>
    <li>매칭 상세페이지 구현</li>
    <li>마이페이지 구현</li>
    <li>매칭 테스트페이지 구현</li>
  </ol>

<br />
<h3>박수진</h3>
  <ol>
    <li>회원가입 구현</li>
    <li>매칭페이지 구현</li>
    <li>매칭필터 구현</li>
    <li>채팅 구현</li>
  </ol>

<br />
<br />
<h2>💡 버전</h2>
1.0 : 룸메이트 서비스 배포(22.10.23)
<br />
