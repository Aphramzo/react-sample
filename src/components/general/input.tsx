import React from 'react';

type InputTypeProps = {
  labelText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: 'text' | 'password';
  value?: string | number | readonly string[] | undefined;
};
const Input: React.FC<InputTypeProps> = ({
  labelText,
  onChange,
  name,
  type = 'text',
  value,
}) => {
  return (
    <>
      <label>{labelText}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
