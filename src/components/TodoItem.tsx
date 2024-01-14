interface todoItemProps {
  chk: boolean;
  text: string;
}

const todoItem = ({ text, chk }: todoItemProps) => {
  return (
    <li>
      <input type="checkbox" name={text} id="" checked={chk} />
      <label htmlFor={text}>
        {text}
        <input type="text" className="todo-modify" />
      </label>

      <button className="modify">수정</button>
      <button className="delete">삭제</button>
    </li>
  );
};

export default todoItem;
