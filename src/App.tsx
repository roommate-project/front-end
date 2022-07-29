import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from 'RoutePage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
