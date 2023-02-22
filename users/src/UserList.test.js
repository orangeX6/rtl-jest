import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  const { container } = render(<UserList users={users} />);

  return { users };
}

test('render one row per user', () => {
  // Render the component
  renderComponent();
  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();

  //_ method 1
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  //_ method 2
  // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr');

  // Assertion: Correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  // screen.logTestingPlaygroundURL();

  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
