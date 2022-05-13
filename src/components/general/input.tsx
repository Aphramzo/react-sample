import React from 'react';

type InputTypeProps = {
  labelText: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  value?: string | number | readonly string[] | undefined;
};
const Input: React.FC<InputTypeProps> = ({
  labelText,
  name,
  onChange,
  type = 'text',
  value,
  // instead of continuing to increase the number of props we may have to end up passing
  // We can use a spread to include ALL other props
  ...props
}) => {
  return (
    <>
      <label>{labelText}</label>
      <input
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        // by passing the rest of the props like this, the HTML input will get any other
        // props. Say something like data-test-id
        {...props}
      />
    </>
  );
};

export default Input;
