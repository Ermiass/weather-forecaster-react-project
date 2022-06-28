import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './pages/NotFound';
import img from './assets/mou.jpg';
import { toggleTheme } from './store/themeSlice';

const GlobalStyle = createGlobalStyle`
// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//     monospace;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  /* position: relative; */
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
}
 .mode-dark-mode {
  background-color: #333;
   } 
.mode-light-mode {
    // background-color:#fefefe;
     } 
.theme-button {
  display:flex;
  flex-direction:end;
  border-radius: 12px;
  position:realative:
}
`;

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  return (

    <>
      <GlobalStyle />
      <div className={`mode ${theme === 'dark' ? 'mode-dark-mode' : 'mode-light-mode'}`}>
        <Button className="theme-button" onClick={() => dispatch(toggleTheme())}>
          Toggle Theme to {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Header />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
