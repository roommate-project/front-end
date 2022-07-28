import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
// import LoginPage from 'pages/login/pages/LoginPage';
import EmailLoginPage from 'pages/login/pages/EmailLoginPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <EmailLoginPage />
      {/* <LoginPage /> */}
    </ThemeProvider>
  );
}

export default App;
