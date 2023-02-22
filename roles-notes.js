[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://beta.reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>\n    Count: {count}\n  </button>\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"},{"content":"import { render, screen } from '@testing-library/react';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href=\"/\">Link</a>\n      <button>Button</button>\n      <footer>ContentInfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt=\"description\" /> img\n      <input type=\"checkbox\" /> Checkbox\n      <input type=\"number\" /> SpinButton\n      <input type=\"radio\" /> Radio\n      <input type=\"text\" /> Textbox\n      <li>listItem</li>\n      <ul>ListGroup</ul>\n    </div>\n  );\n}\n\nrender(<RoleExample />);","type":"code","id":"6tfns"},{"content":"test('can find elements by role',()=>{\r\n  render(<RoleExample/>);\r\n\r\n  const roles = [\r\n    'link',\r\n    'button',\r\n    'contentinfo',\r\n    'heading',\r\n    'banner',\r\n    'img',\r\n    'checkbox',\r\n    'spinbutton',\r\n    'radio',\r\n    'textbox',\r\n    'listitem',\r\n    'list'\r\n  ]\r\n\r\n\r\nfor (let role of roles){\r\n  const el = screen.getByRole(role);\r\n  expect(el).toBeInTheDocument();\r\n}\r\n\r\n})","type":"code","id":"ega6x"},{"content":"function AccessibleName(){\r\n  return (\r\n    <div>\r\n      <button>Submit</button>\r\n      <button>Cancel</button>\r\n    </ div>\r\n  )\r\n}\r\n\r\nrender(<AccessibleName/>)","type":"code","id":"jbjj9"},{"content":"test('can select by accessible name', ()=> {\r\n  render(<AccessibleName/>)\r\n  const submitButton = screen.getByRole('button',{\r\n    name: /Submit/i\r\n  })\r\n\r\n   const cancelButton = screen.getByRole('button',{\r\n    name: /Cancel/i\r\n  })\r\n\r\n  expect(submitButton).toBeInTheDocument()\r\n  expect(cancelButton).toBeInTheDocument()\r\n})","type":"code","id":"c4v34"},{"content":"function MoreNames(){\r\n\r\nreturn (<div>\r\n  <label htmlFor=\"email\"> Email\r\n  </label>\r\n  <input id=\"email\"/>\r\n  <label htmlFor=\"search\">Search</label>\r\n  <input id=\"search\"/>\r\n</div>\r\n)\r\n\r\n}\r\n\r\nrender(<MoreNames/>)\r\n","type":"code","id":"8ajmd"},{"content":"test('shows an email and search input',()=>{\r\n  render(<MoreNames/>)\r\n\r\n  const emailInput = screen.getByRole('textbox', {\r\n    name:/email/i\r\n  });\r\n\r\n  const searchInput = screen.getByRole('textbox', {\r\n    name:/search/i\r\n  })\r\n\r\n  expect(emailInput).toBeInTheDocument()\r\n  expect(searchInput).toBeInTheDocument()\r\n})","type":"code","id":"jl1t6"},{"content":"function IconButtons() {\n  return (\n    <div>\n      <button aria-label=\"sign in\">\n        <svg />\n      </button>\n\n      <button aria-label=\"sign out\">\n        <svg />\n      </button>\n    </div>\n  );\n}\n\nrender(<IconButtons/>)","type":"code","id":"l4bim"},{"content":"test('find elements based on label',()=> {\r\n  render(<IconButtons/>)\r\n\r\nconst SignInButton = screen.getByRole('button',{\r\n  name:/sign in/i\r\n})\r\n\r\nconst SignOutButton = screen.getByRole('button', {\r\n  name: /sign out/i\r\n})\r\n\r\nexpect(SignInButton).toBeInTheDocument();\r\nexpect(SignOutButton).toBeInTheDocument();\r\n\r\n})","type":"code","id":"r4y47"}]