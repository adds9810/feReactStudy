import TodoItem from "./TodoItem";
interface todoListType {
  id: number;
  chk: boolean;
  text: string;
}
interface todoListProps {
  todoData: todoListType[];
}

const TodoList = ({ todoData }: todoListProps) => {
  return (
    <ul className="todo-list">
      {todoData.map(todo => (
        <TodoItem key={todo.id} chk={todo.chk} text={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
