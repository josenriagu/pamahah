import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/Theme';

import GlobalStyle from './styles/GlobalSyles';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2/';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
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
          <Slide2 theme={theme} />
          <Slide3 theme={theme} />
          <Slide4 />
          <Slide5 />
          <Slide6 />
        </AppDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
