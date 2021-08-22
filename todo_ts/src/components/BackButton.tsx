import { memo } from "react"
import { useHistory } from "react-router-dom";

export const BackButton = memo((props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  return <button onClick={onClick} style={{ color: props.color }} >TOPページに戻るで！</button>
});