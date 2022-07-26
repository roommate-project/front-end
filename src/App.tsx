import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
import LoginPage from 'pages/login/LoginPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
