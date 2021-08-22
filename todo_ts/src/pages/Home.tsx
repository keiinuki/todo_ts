import { Link, useHistory } from "react-router-dom";
import './PagesStyle.css';

export const Home = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/page2");
  };
  
  return (
    <div className="container-style">
      <h1>やらなあかんこと　ＨＯＭＥ</h1>
      <div>
        <Link to="/page1">「やらなあかんこと」はこちら</Link>
        <br />
        <Link to="/page2">「登録してな」はこちら</Link>      
      </div>
        <br/>
      <div>
        <button onClick={onClick}>Page2へ移動</button>
      </div>
    </div>
  );
};