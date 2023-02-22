import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  //Assertion - Make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted NOT BEST IMPLEMENTATION', () => {
  // NOT THE BEST IMPLEMENTATION

  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  // Try to render our form
  render(<UserForm onUserAdd={callback} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard('Jane');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('jane@app.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate CLicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'Jane', email: 'jane@app.com' });
});

test('it calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();

  // Try to render our form
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard('Jane');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('jane@app.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate CLicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Jane', email: 'jane@app.com' });
});

test('empties the two inputs when form is submitted', () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
