import React, { useState } from 'react';
import { Button } from '../components/general/button';
import LoginForm from '../components/login/loginForm';
import { useLoginMutation } from '../store/user';

const Login: React.FC<{}> = () => {
  // State is tracked here within the scope of this component. State is local
  // changes that have happened after a component was rendered to screen using
  // any props that may have been passed
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //by using the rtk api, we get fetching, loading states, error states,
  // and result caching out of the box
  const [login, { data: user, isLoading }] = useLoginMutation();

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
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
      {user && (
        <div>
          Welcome {user.firstName} {user.lastName}!
        </div>
      )}
      <form onSubmit={onSubmitLogin}>
        <LoginForm onChange={onValueChange} />
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
