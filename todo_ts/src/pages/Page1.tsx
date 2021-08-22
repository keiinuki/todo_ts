import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";
import { useTodo } from "../Hooks/UseTodo";

export const Page1 = () => {
  const { state } = useLocation();
  const [word, setWord] = useState<string>("");
  const [post, setPost] = useState<string>("");
  const { todoList, setTodoList, completeTodoList, setCompleteTodoList, addTodo, deleteTodo, completeTodo, backTodo } = useTodo();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/29/")
    .then((response) => {      
      setPost(response.data.title)
    });    
  },[]);  

  const onChangeAdd = (e:any) => {    
    setWord( e.target.value )   
  };  
  const onClickAdd = () => {         
    addTodo(word);
    setWord("");
  };
  const onClickDelete = (i:any) => {
    deleteTodo(i);
  };
  const onClickComplete =(i:any) => {
    completeTodo(i);
  };  
  const onClickBack = (i:any) => {
    backTodo(i);
  };  

    useEffect(() => {
    if (state) {          
    setTodoList(state.todoList);    
    } if (state) {
    setCompleteTodoList(state.completeTodoList);
    }
  },[state]);

  const buttonStyle = {
    padding: "auto",
    margin: "2px",
    justifyContent: "float-right"
  }
    
  return (
  <div className="container-style">
    <h1>やらなあかんこと</h1>
    <div>
      <div>        
        <h2>今からやるで！</h2>        
        <form>
          <input type="text" onChange={(e) => onChangeAdd(e)} value= {word} placeholder="何やるか決めた？"/>        
          <button type= "button" style={buttonStyle} onClick={() => onClickAdd()} >やるで！</button>
        </form>
        <div>          
            <li>例）{post}</li>
          <ol className="ol-style">            
            {todoList.map((val,i)=>(<li> {(val)} <button type= "button" style={buttonStyle} onClick={() => onClickComplete(i)}>やったで！</button><button type= "button" style={buttonStyle} onClick={() => onClickDelete(i)} >やめとくわ...</button></li>)) } 
          </ol>
        </div>     
      </div>        
      <div>
        <br />          
          <h2>もう終わったで！</h2>          
          <ol className="ol-style">
            {completeTodoList.map((val,i)=>(<li className="complete-style">{(val)} <button type= "button" style={buttonStyle} onClick={() => onClickBack(i)}>やり直さな！</button></li>))}  
        </ol>
      </div>             
    </div>
    <div>
      <br /><br />      
      <Link to={{ pathname:"/page1/detailA", state: { todoList, completeTodoList } }}>「今からやること」を確認する</Link>
      <br />
      <Link to={{ pathname:"/page1/detailB", state: { todoList, completeTodoList } }}>「もう終わったこと」を確認する</Link>
      <br /><br /><br /> 
      <BackButton color="orange" />    
    </div>
  </div>
  );
};