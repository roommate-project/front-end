import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/login/LoginPage';
import EmailLoginPage from 'pages/login/EmailLoginPage';
import SignUpMain from 'pages/signup/SignUpMainPage';
import SignUpEmail from 'pages/signup/SignUpEmailPage';
import SignUpEmailAuthPage from 'pages/signup/SignUpEmailAuthPage';
import SignUpLastPage from 'pages/signup/SignUpLastPage';
import MatchingPage from 'pages/matching/MatchingPage';
import MatchingDetailPage from 'pages/matchingDetails/MatchingDetailPage';
import ChatListPage from 'pages/chat/ChatListPage';
import ChatPage from 'pages/chat/ChatPage';
import MyPage from 'pages/myPage/MyPage';
import ResidentialPropensityTest from 'pages/residentialPropensityTest/ResidentialPropensityTest';

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<MatchingPage />} />
      <Route path="/filter" element={<MatchingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/email" element={<EmailLoginPage />} />
      <Route path="/sign-up" element={<SignUpMain />} />
      <Route path="/sign-up/email" element={<SignUpEmail />} />
      <Route path="/sign-up/email-auth" element={<SignUpEmailAuthPage />} />
      <Route path="/sign-up/email/info" element={<SignUpLastPage />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/sign-up/email-auth/last" element={<SignUpLastPage />} />
      <Route path="/matching/detail/:userId" element={<MatchingDetailPage />} />
      <Route path="/chat-list" element={<ChatListPage />} />
      <Route path="/chat-list/chat/:chatId" element={<ChatPage />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/residential-test" element={<ResidentialPropensityTest />} />
    </Routes>
  );
}

export default RoutePage;
