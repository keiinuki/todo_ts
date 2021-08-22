import { Link, useParams, useLocation }  from "react-router-dom";
import { BackButton } from "../components/BackButton";



export const Parameter = () => {
  const { id }:any = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  
  return (
    <div className="container-style">
      <h1>ここにパラメータが遷移されます</h1>
      <p>id:{id}</p>
      <p>name:{query.get("name")}</p>      
      <br />
      <Link to="/page2">「登録してな」に戻る</Link>
      <br />
      <br />
      <BackButton />
    </div>
  );
};