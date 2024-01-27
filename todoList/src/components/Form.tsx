import { useState } from "react";

interface formType {
  chk: boolean;
  text: string;
}
interface props {
  onAddList: (list: listType) => void;
}

// props: any props을 명시하기 어려울 경우 사용, any를 사용하면 타입스크립트를 사용하는 의미가 없기에 알고 있다면 명시해준다.
// https://velog.io/@kokoball0/TypeScript-Error-Parameter-props-implicitly-has-an-any-type
// https://believecom.tistory.com/763
const Form = (props: props) => {
  const [formValues, setformValues] = useState<formType>({
    text: "",
    chk: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (formValues.text === "") {
      window.alert("할 일을 등록해주세요!");
      return;
    } else {
      props.onAddList({
        id: Date.now(),
        ...formValues,
      });
    }
  };
  return (
    <div className="form-wrap">
      <input
        type="text"
        name="text"
        placeholder="할 일을 적어주세요"
        value={formValues.text}
        onChange={handleInputChange}
        id="todoTxt"
      />
      <button type="button" onClick={handleSubmit}>
        등록하기
      </button>
    </div>
  );
};

export default Form;
