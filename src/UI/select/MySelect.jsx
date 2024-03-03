import classes from './MySelect.module.scss';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.select}
      onChange={(event) => onChange(event.target.value)}
      value={value}
      name=""
      id=""
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
