import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom";
import { Message } from "../components/Message"
import { BackButton } from "../components/BackButton";


export const Page2 = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/3/";  
  useEffect(() => {
    fetch(url)
    .then((response) => {
      console.log("レスポンス", response);
      return response.json();
    })
    .then((json) => {
      console.log("JSON", json);
    });
  },[]);

  

  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");  
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);

  const onClick = useCallback(() => {
  console.log(name);
  console.log(id);  
  },[name, id]);

  
  return (
    <div className="container-style">
      <h1>登録してな</h1>
      <Message color="green" />
      <div>
        <label>名前:</label>
        <input value={name} onChange={onChangeName} /> 
        <br/>
        <label>ID</label>
        <input value={id} onChange={onChangeId} />
        <button onClick={onClick}>ボタン</button>
      </div>
      <div>{name}  {id}</div>        
      <div>
    <Link to="/page2/:id?name=name">パラメーター画面へ</Link>
      <br />
      <br />
      <br />
      <BackButton />
      </div>
    </div>
  );
};