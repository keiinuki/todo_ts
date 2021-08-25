import { Link, useLocation } from "react-router-dom";
//import { useState, useEffect } from "react";
import { useEffect } from "react";
import { BackButton } from "../components/BackButton";
import { useRecoilState } from "recoil";
import { todoListState, completeTodoListState } from "../Hooks/atom";

export const Page1DetailA = () => {  
  const { state } = useLocation<{todoList:string[]; completeTodoList:string[];}>();
  //const [todoList, setTodoList] = useState<string[]>([]);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  //const [completeTodoList, setCompleteTodoList] = useState<string[]>([]);
  const [completeTodoList, setCompleteTodoList] = useRecoilState(completeTodoListState);

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