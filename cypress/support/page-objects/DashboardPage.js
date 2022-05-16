const DashboardPage = () => {
  const PageComponents = {
    welcome_message_container: () => { return cy.contains('Welcome to the dashboard') },
  };
  
  return {
    ...PageComponents,
  };
};
export default DashboardPage;
