import React, {useEffect} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
    
  :root {
    --primary-color: #f05014;
    --background-color: #000;
  }

  .ui-dark {
    --primary-color: blue;
    --background-color: white;
  }
`;

function App() {
  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
    }
  }, []);

  const darkOnOff = () => {
    if (
      document.getElementsByTagName("html")[0].classList.contains("ui-dark")
    ) {
      document.getElementsByTagName("html")[0].classList.remove("ui-dark");
      window.localStorage.setItem("bgMode", "light");
    } else {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
      <Background>
        <TodoHead />
        <span>dark mode</span>
        <button onClick={darkOnOff}>on/off darkMode</button>
        <TodoList />
        <TodoCreate />
        </Background>
      </TodoTemplate>

    </TodoProvider>
  );
}

const Background = styled.div`
  background-color: var(--background-color);
  color: var(--primary-color);
`;

export default App;
