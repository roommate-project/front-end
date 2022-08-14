import { Routes, Route } from 'react-router-dom';
import MatchingPage from 'pages/MatchingPage';
import LoginPage from 'pages/login/LoginPage';
import EmailLoginPage from 'pages/login/EmailLoginPage';
import SignUpMain from 'pages/signup/SignUpMainPage';
import SignUpEmail from 'pages/signup/SignUpEmailPage';
import SignUpEmailAuthPage from 'pages/signup/SignUpEmailAuthPage';
import SignUpLastPage from 'pages/signup/SignUpLastPage';
import MatchingDetailPage from 'pages/matchingDetails/MatchingDetailPage';
import ChatPage from 'pages/ChatPage';
import MyPage from 'pages/MyPage';

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<MatchingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/email" element={<EmailLoginPage />} />
      <Route path="/sign-up" element={<SignUpMain />} />
      <Route path="/sign-up/email" element={<SignUpEmail />} />
      <Route path="/sign-up/email-auth" element={<SignUpEmailAuthPage />} />
      <Route path="/sign-up/email-auth/last" element={<SignUpLastPage />} />
      <Route path="/matching/detail/:userId" element={<MatchingDetailPage />} />
      <Route path="/chat-list" element={<ChatPage />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
}

export default RoutePage;
