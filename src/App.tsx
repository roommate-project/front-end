import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
// import LoginPage from 'pages/login/pages/LoginPage';
import EmailLoginPage from 'pages/login/pages/EmailLoginPage';
import SignUpMain from 'pages/signup/SignUpMainPage';
import SignUpEmail from 'pages/signup/SignUpEmailPage';
import SignUpEmailAuthPage from 'pages/signup/SignUpEmailAuthPage';
import SignUpLastPage from 'pages/signup/SignUpLastPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SignUpMain />
      <SignUpEmail />
      <SignUpEmailAuthPage />
      <SignUpLastPage />
      <EmailLoginPage />
      {/* <LoginPage /> */}
    </ThemeProvider>
  );
}

export default App;
