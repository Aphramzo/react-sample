import React from 'react';
import Input from '../general/input';

type LoginFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onChange }) => {
  return (
    <div>
      <Input name="username" labelText="Username" onChange={onChange} />
      <Input
        name="password"
        labelText="Password"
        type="password"
        onChange={onChange}
      />
    </div>
  );
};

export default LoginForm;
