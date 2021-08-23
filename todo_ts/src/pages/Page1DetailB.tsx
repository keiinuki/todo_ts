import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";

export const Page1DetailB = () => {
  const { state } = useLocation<any>();
  const [todoList, setTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]);
  console.log(completeTodoList);  
  
  useEffect(() => {
    if (state.completeTodoList) {
      setCompleteTodoList(state.completeTodoList);
    } if (state.todoList) {
      setTodoList(state.todoList);      
    }
  },[state]);  

  return (
    <div className="container-style">
      <h1>もう終わったこと</h1>
      <br />
      <ol className="ol-style">      
      {completeTodoList.map((val)=>(<li> {(val) } </li>)) }
      </ol>
      <br />
      <Link to={{ pathname:"/page1", state: { todoList, completeTodoList } }}>「やらなあかんこと」に戻る</Link>
      <br />      
      <br />
      <BackButton color="blue" />
    </div>
  );
};