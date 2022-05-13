import React from 'react';
import Input from '../general/input';

type LoginFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onChange }) => {
  return (
    <div>
      <Input
        data-testId="login-username"
        labelText="Username"
        name="username"
        onChange={onChange}
      />
      <Input
        data-testId="login-password"
        labelText="Password"
        name="password"
        onChange={onChange}
        type="password"
      />
    </div>
  );
};

export default LoginForm;
