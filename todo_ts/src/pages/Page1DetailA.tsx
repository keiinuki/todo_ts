import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";

export const Page1DetailA = () => {  
  const { state } = useLocation<{state:string[] } | any>();
  const [todoList, setTodoList] = useState<string[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<string[]>([]);

  useEffect(() => {
    if (state.todoList) {
      setTodoList(state.todoList);      
    } if (state.completeTodoList) {
      setCompleteTodoList(state.completeTodoList);
    }
  },[state]);
  
  return (
    <div className="container-style">
      <h1>今からやること</h1>
      <br/>
      <ol className="ol-style">      
      {todoList.map((val)=>(<li> {(val) } </li>)) }
      </ol>
      <br />
      
      <Link to={{ pathname:"/page1", state: { todoList, completeTodoList } }}>「やらなあかんこと」に戻る</Link>
      <br />
      <br />
      <BackButton color="green" />
    </div>
  );
};