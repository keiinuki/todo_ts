import { useEffect, useState } from "react";
import { KEYS, setItem, getItem, removeItem  } from "../utils/LocalStorage";
import { Link } from "react-router-dom"

export const Page3 = () => {
  const [text, setText] = useState<string>("");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    updateLabel();
  },[]);

  const updateLabel = () => {
    setLabel(getItem(KEYS.SAMPLE_TEXT));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const removeClick = () => {
    removeItem(KEYS.SAMPLE_TEXT);
    updateLabel();
  };

  const setClick = () => {
    setItem(KEYS.SAMPLE_TEXT, text);
    updateLabel();
  };

  const getClick = () => {
    setText(getItem(KEYS.SAMPLE_TEXT));
    updateLabel();
  };
  console.log(label);
  return (
    <div>
      <p>
        保存する値:
        <input type="text" value={text} onChange={handleChange} />
      </p>
      <p>保存された値:{label}</p>
      <button onClick={setClick}>保存する</button>
      <button onClick={getClick}>呼び出す</button>
      <button onClick={removeClick}>削除する</button>
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </div>
  );
};