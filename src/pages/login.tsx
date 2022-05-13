import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/auth';
import { Button } from '../components/general/button';
import LoginForm from '../components/login/loginForm';
import { DASHBOARD_ROUTE } from '../constants/routes';
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

  // React router provides simple hooks to all us to control the route the user is currently on
  const navigate = useNavigate();

  // classic example of manually using rkt slices instead of
  // the query option shown with login
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setCredentials(user));
      navigate(`/${DASHBOARD_ROUTE}`);
    }
  }, [user, navigate, dispatch]);

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
