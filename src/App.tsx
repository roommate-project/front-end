import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from 'RoutePage';
import Header from 'components/header/Header';
import Footer from 'components/navigationBar/NavigationBar';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <RoutePage />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
