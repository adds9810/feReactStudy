import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { countState } from "~/store/recoil"; // Recoil 상태를 가져옴

// style 구현
import "../../assets/main.scss";

export default () => {
  const [count, setCount] = useRecoilState(countState);

  const [id, setId] = useState<string>("");

  const addCount = () => setCount(count + 1);
  const removeCount = () => setCount(count - 1);

  const a: ITest = { a: "123123" };

  useEffect(() => {
    console.log("count:", count);
    return () => {
      console.log("unmount");
    };
  }, [count]);

  return (
    <div className="main">
      <h1>todo list</h1>
      <div className="form-wrap">
        <input type="text" onChange={e => setId(e.target.value)} value={id} />
        <button>등록하기</button>
      </div>

      <div className="top-wrap">
        <ul className="tab">
          <li>
            <button className="active">전체</button>
          </li>
          <li>
            <button>진행중</button>
          </li>
          <li>
            <button>완료</button>
          </li>
        </ul>
        <p>
          총 <strong>{count}</strong>건
        </p>
      </div>

      <div className="todo-wrap">
        <p className="no-data">
          등록된 할 일이 없어요!
          <br /> 할일을 등록해 주세요!
        </p>
        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">
              할일일이링ㄹ <input type="text" className="todo-modify" />
            </label>

            <button className="modify">수정</button>
            <button className="delete">삭제</button>
          </li>
        </ul>
      </div>

      {/* <div className="count">
        <button onClick={() => addCount()}>+</button>
        <button onClick={() => removeCount()}>-</button>
        <span>{count}</span>
      </div> */}
    </div>
  );
};
