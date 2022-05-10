import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../components/general/button';
import LoginForm from '../components/login/loginForm';
import { User } from '../models/user';

const Login: React.FC<{}> = () => {
  // State is tracked here within the scope of this component. State is local
  // changes that have happened after a component was rendered to screen using
  // any props that may have been passed
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const onSubmitLogin = async (e: React.FormEvent) => {
    console.log('submitting', username, password);
    e.preventDefault();

    // Tracking the state of the network call so we can control the UI and
    // let the user know something is happening
    setLoading(true);

    try {
      const result = await axios.post(
        'https://58iiwrc1gf.execute-api.us-west-1.amazonaws.com/prod/login',
      );

      // with this result we can get something like the user details along with any other
      // info we need to initially load up the site for them
      // This is a very basic example. But we can see that this is a prime
      // example of data we would need across many components, not just within
      // this tree
      setUser(result.data);
      // We would then also want to track error states here, and potentially message
      // the user that something about their request failed
    } finally {
      setLoading(false);
    }
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
        <Button type="submit" disabled={loading}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
