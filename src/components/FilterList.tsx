import FilterItem from "./FilterItem";
interface filterListType {
  value: string;
  label: string;
}
interface filterListProps {
  todoFilter: filterListType[];
}

const FilterList = ({ todoFilter }: filterListProps) => {
  //   return (
  //     <ul className="tab-list">
  //       {list.map((item, index) => {
  //         <FilterItem key={item.value} value={item.value} label={item.label} />;
  //       })}
  //     </ul>
  //   );
  return (
    <ul className="tab-list">
      {todoFilter.map(todo => (
        <FilterItem key={todo.value} label={todo.label} value={todo.value} />
      ))}
    </ul>
  );
};

export default FilterList;
