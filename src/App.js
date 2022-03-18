import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea.jsx";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [open]);
  const calcResult = useMemo(() => 1 + 3, []);

  console.log(calcResult);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
