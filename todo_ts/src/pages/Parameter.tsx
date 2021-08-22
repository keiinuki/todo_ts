import { Link, useParams, useLocation }  from "react-router-dom";
import { BackButton } from "../components/BackButton";
//import axios from "axios";
//import { useEffect } from "react";
import { ContextComponent } from "../components/ContextComponent";

export const Parameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  
  //const url = "https://jsonplaceholder.typicode.com/todos/30/";
  //useEffect(() => {
    //axios.get(url)
    //.then((response) => {
    //  console.log(response);    
    //});
  //},[]);

  return (
    <div className="container-style">
      <h1>ここにパラメータが遷移されます</h1>
      <p>id:{id}</p>
      <p>name:{query.get("name")}</p>
      <div><ContextComponent /></div> 
      <br />
      <Link to="/page2">「登録してな」に戻る</Link>
      <br />
      <br />
      <BackButton />
    </div>
  );
};