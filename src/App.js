import React from 'react';
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
    --primary-color: #08F700;
    --background-color: #000;
  }

  .ui-dark {
    /*--primary-color: blue;*/
    --background-color: white;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <Background>
          <TodoHead />
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
  border-radius: 16px;

`;

export default App;
