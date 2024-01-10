import TodoItem from "./TodoItem";
interface todoListType {
  chk: boolean;
  title: string;
  text: string;
}
interface todoListProps {
  todoData: todoListType[];
}

const TodoList = ({ todoData }: todoListProps) => {
  return (
    <ul className="todo-list">
      {todoData.map(todo => (
        <TodoItem
          key={todo.title}
          chk={todo.chk}
          title={todo.title}
          text={todo.text}
        />
      ))}
    </ul>
  );
};

export default TodoList;
