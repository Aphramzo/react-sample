const LoginPage = () => {
  const LoginComponents = {
    username_input: () => { return cy.get('input[data-testid=login-username]') },
    password_input: () => { return cy.get('input[data-testid=login-password]') },
    submit_button: () => { return cy.get('button[type=submit]') },
  };

  return {
    ...LoginComponents,
    login_components: LoginComponents,
    login: (username, password) => {
        LoginComponents.username_input().type(username)
        LoginComponents.password_input().type(password)
        LoginComponents.submit_button().click()
    }
  };
};
export default LoginPage;
