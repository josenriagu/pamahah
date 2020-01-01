import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/Theme';

import GlobalStyle from './styles/GlobalSyles';
import Slide1 from './components/Slide1';
import { AppDiv } from './App.styled';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => (theme === 'light') ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle h1 />
        <AppDiv onClick={toggleTheme}>
          <Slide1 theme={theme} />
        </AppDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
