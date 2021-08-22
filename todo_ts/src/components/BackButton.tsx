import { memo } from "react"
import { useHistory } from "react-router-dom";

type Props = {
  //onclick:() => void;
  color?: string;
}

export const BackButton = memo((props:Props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  return <button onClick={onClick} style={{ color: props.color }} >TOPページに戻るで！</button>
});