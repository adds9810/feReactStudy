interface FilterItemProps {
  value: string;
  label: string;
}

const FilterItem = ({ value, label }: FilterItemProps) => {
  return (
    <li>
      {
        <button
          className={todoState === value ? "active" : ""}
          onClick={() => setTodoState(value)}
        >
          {label}
        </button>
      }
    </li>
  );
};

export default FilterItem;
