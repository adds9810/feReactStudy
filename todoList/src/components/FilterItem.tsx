interface FilterItemProps {
  value: string;
  label: string;
}

const FilterItem = ({ value, label }: FilterItemProps) => {
  return (
    <li>
      {
        // <button
        //   className={todoState === value ? "active" : ""}
        //   onClick={() => setTodoState(value)}
        // >
        // </button>
      }
      {label}
    </li>
  );
};

export default FilterItem;
