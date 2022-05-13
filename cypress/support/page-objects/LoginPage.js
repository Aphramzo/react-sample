const LoginPage = () => {
  const PageComponents = {
    username_input: () => { return cy.get('input[data-testid=login-username]') },
    password_input: () => { return cy.get('input[data-testid=login-password]') },
    submit_button: () => { return cy.get('button[type=submit]') },
  };
  
  return {
    ...PageComponents,
  };
};
export default LoginPage;
