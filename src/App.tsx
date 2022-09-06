import { ThemeProvider } from 'styled-components';
import defaultTheme from 'design/theme';
import GlobalStyle from 'design/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from 'RoutePage';
import Header from 'components/header/Header';
import NavigationBar from 'components/navigationBar/NavigationBar';
import Footer from 'components/footer/Footer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <RoutePage />
        <NavigationBar />
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
