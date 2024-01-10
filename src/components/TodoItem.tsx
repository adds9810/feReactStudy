interface todoItemProps {
  chk: boolean;
  title: string;
  text: string;
}

const todoItem = ({ title, text, chk }: todoItemProps) => {
  return (
    <li>
      <input type="checkbox" name="" id="" checked={chk} />
      <label htmlFor="">
        <strong>{title}</strong> {text}
        <input type="text" className="todo-modify" />
      </label>

      <button className="modify">수정</button>
      <button className="delete">삭제</button>
    </li>
  );
};

export default todoItem;
