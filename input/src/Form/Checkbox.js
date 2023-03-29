import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name=""
            id=""
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
