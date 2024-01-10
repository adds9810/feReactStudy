import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoFilterState } from "~/store/recoil"; // Recoil 상태를 가져옴
import FilterList from "../../components/FilterList";
import TodoList from "../../components/TodoList";
import Empty from "../../components/Empty";
import Form from "../../components/Form";

// style 구현
import "../../assets/main.scss";

export default () => {
  const [todoState, setTodoState] = useRecoilState(todoFilterState);
  const [todoFilter, setTodoFilter] = useState([
    { value: "All", label: "전체" },
    { value: "Proceeding", label: "진행중" },
    { value: "Complete", label: "완료" },
  ]);

  const [todoList, setTodoList] = useState<listType[]>([
    { chk: false, title: "할일1", text: "dd" },
    { chk: false, title: "할일2", text: "dd" },
  ]);

  useEffect(() => {
    console.log("count:", todoState);
    return () => {
      console.log("unmount");
    };
  }, [todoState]);

  return (
    <div className="main">
      <h1>todo list</h1>
      <Form />
      {todoList.length > 0 ? (
        <div className="board-wrap">
          <div className="board-top">
            <FilterList todoFilter={todoFilter} />
            <p>
              총 <strong>{todoList.length}</strong>건
            </p>
          </div>
          <div className="board-bottom">
            <TodoList todoData={todoList} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};
