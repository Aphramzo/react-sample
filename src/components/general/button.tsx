import * as React from 'react';

type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: () => void;
  // By defining explicty options for type, we can prevent errors and improve
  // developer experience as these options will appear only in typeahead
  type?: 'button' | 'submit' | 'reset' | undefined;
};

// This is an example of a simple or atomic component. It's sole responsibility
// is to render a button to the DOM that will have an event when clicked
// By having both it's content and event come in as props, it can be highly reusable
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export { Button };
