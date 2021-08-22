import { useState,  useCallback } from "react";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]); 
    
    //コンポーネントから受け取る「word」が引数、「word」を「todoList」の配列に渡す
    const addTodo = useCallback((word) => {         
    const newTodoList = [...todoList];
    newTodoList.push(word);
    setTodoList(newTodoList);    
    alert("やることにしたで！");
  },[todoList]);
  
  //「todoList」の中から該当する「index (i)」をspliceで抜き出す
  const deleteTodo = useCallback((i) => {
    const newTodoList = [...todoList];
    newTodoList.splice(i,1);
    setTodoList(newTodoList);
    alert("やっぱりやめるわ．．．");
  },[todoList]);
  
  //「todoList」の中から該当する「index (i)」をspliceで抜き出して、それを「completeTodoList」の配列に入れる
  const completeTodo = useCallback((i) => {
    const newTodoList = [...todoList];
    newTodoList.splice(i,1);    
    const newCompleteTodoList = [...completeTodoList, todoList[i]]; 
    setTodoList(newTodoList);
    setCompleteTodoList(newCompleteTodoList);        
    console.log(i);
    alert("やったった！");
  },[todoList, completeTodoList]);

  //「completeTodoList」の中から該当する「index (i)」をspliceで抜き出して、それを「todoList」の配列に入れる
  const backTodo = useCallback((i) => {
    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(i,1);
    const newTodoList = [...todoList, completeTodoList[i]];      
    setCompleteTodoList(newCompleteTodoList);
    setTodoList(newTodoList);
    alert("あかん！やり直しや．．．");
  },[todoList, completeTodoList]);  
  
  //コンポーネント側で必要な値と関数をすべて受け渡す
  return { todoList, setTodoList, completeTodoList, setCompleteTodoList, addTodo, deleteTodo, completeTodo, backTodo };
};