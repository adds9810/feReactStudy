import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoFilterState } from "~/store/recoil"; // Recoil 상태를 가져옴
import FilterList from "../../components/FilterList";

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

  const empty = () => {
    return (
      <div className="empty-wrap">
        <p className="no-data">
          등록된 할 일이 없어요!
          <br /> 할일을 등록해 주세요!
        </p>
      </div>
    );
  };

  const board = () => {
    return (
      <div className="board-wrap">
        <div className="board-top">
          <FilterList todoFilter={todoFilter} />
          <p>
            총 <strong>{todoList.length}</strong>건
          </p>
        </div>
        <div className="board-bottom">{printList()}</div>
      </div>
    );
  };
  const printList = () => {
    return <ul className="todo-list">{printListItem()}</ul>;
  };
  const printListItem = () => {
    return (
      <li>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          할일일이링ㄹ <input type="text" className="todo-modify" />
        </label>

        <button className="modify">수정</button>
        <button className="delete">삭제</button>
      </li>
    );
  };
  useEffect(() => {
    console.log("count:", todoState);
    return () => {
      console.log("unmount");
    };
  }, [todoState]);

  return (
    <div className="main">
      <h1>todo list</h1>
      <div className="form-wrap">
        <input type="text" />
        <button>등록하기</button>
      </div>
      {todoList.length > 0 ? board() : empty()}
    </div>
  );
};
