import React, { useState } from 'react';
import { Button } from '../components/general/button';
import LoginForm from '../components/login/loginForm';

const Login: React.FC<{}> = () => {
  // State is tracked here within the scope of this component. State is local
  // changes that have happened after a component was rendered to screen using
  // any props that may have been passed
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const onSubmitLogin = (e: React.FormEvent) => {
    console.log('submitting', username, password);
    e.preventDefault();
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // We can see here that while this is tracking the state of the entire form
    // it's not a sustainable way and would grow cumbersome almost immediately
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <LoginForm onChange={onValueChange} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
