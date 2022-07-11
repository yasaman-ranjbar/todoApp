import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Complited", label: "Complited" },
  { value: "Uncomplited", label: "Uncomplited" },
];

const NavBar = ({ unCompiltedTodos , onChange , selectedOption}) => {




  if (!unCompiltedTodos) return <h2>set your today todos!</h2>;

  return (
    <header className="navbar">
      <span>{unCompiltedTodos}</span> <h2> are not complited</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="selectOption"
      />
    </header>
  );
};

export default NavBar;
