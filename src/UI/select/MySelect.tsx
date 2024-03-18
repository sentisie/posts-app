import classes from './MySelect.module.scss';
import { FC } from 'react';

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  defaultValue: string;
  value?: string;
  onChange?: (value: string) => void;
}

const MySelect: FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select
      className={classes.select}
      onChange={(event) => onChange && onChange(event.target.value)}
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
