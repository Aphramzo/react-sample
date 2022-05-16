const HomePage = () => {
  const PageComponents = {
    login_link: () => { return cy.get('a:contains("Login")') },
  };
  
  return {
    ...PageComponents,
  };
};
export default HomePage;
