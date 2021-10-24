import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .row {
    display: flex;
  }
  
  .d-button {
    margin-left: 260px;
    width : 120px;
    border: none;
    box-shadow: 1px 1px 3px 1px #dadce0;
  }

  .d-button:hover {
    background-color: #7785B4;
    color: white;
  }

  .bg-d {
    color: #B1B0B0;
  }
`;


function TodoHead() {
  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark", "bg-d");
    }
  }, []);

  const darkOnOff = () => {
    if (
      document.getElementsByTagName("html")[0].classList.contains("ui-dark")
    ) {
      document.getElementsByTagName("html")[0].classList.remove("ui-dark");
      document.getElementsByTagName("h1")[0].classList.add("bg-d");
      window.localStorage.setItem("bgMode", "light");
    } else {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
      
      document.getElementsByTagName("h1")[0].classList.remove("bg-d");
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div class="row">
        <div className="day">{dayName}</div>
        <button class="d-button" onClick={darkOnOff}>DarkMode on/off</button>
      </div>
      <div className="tasks-left"> 할 일   {undoneTasks.length} / {todos.length} </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
