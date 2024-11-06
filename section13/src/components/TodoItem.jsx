import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheck = () => {
    onUpdate(id);
  };

  const onDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheck} checked={isDone} type="checkbox" />
      <div
        className="content"
        style={{ textDecorationLine: isDone ? "line-through" : "none" }}
      >
        {content}
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
