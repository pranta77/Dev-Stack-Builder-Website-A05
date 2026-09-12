<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories. -->


 # Stack Builder App
 <<----------------->>
 # description
 A modern and responsive Dev Stack Builder website where developers can explore different technologies and create their own personalized technology stack.

 -------------
 # Technologies Used
 React.js
 TypeScript
 Tailwind CSS
 DaisyUI
 React-Toastify
 React-Icon
 JSON
 Vite
--------------
 # Features
1.Build Your Own Stack

Explore different technologies and add your favorite technologies to your personal development stack.

2. Smart Notifications

React-Toastify provides instant feedback when technologies are added, removed, duplicated, or when the entire stack is cleared.

3. Fully Responsive

The website is designed to work smoothly across mobile and desktop devices.


# React Questions & Answers ?????

 1. What is JSX & Why Useing In react?

JSX lets us write HTML-like code inside JavaScript. It makes creating UI easier in React.

2. What is the difference between Props and State?

Props are used to pass data from parent to child.
State is data inside a component that can be changed.

 3. What does `useState` do?

useState is used to store and update data in a component.

 4. What does useEffect do?

useEffect runs code after a component loads or updates. It can be used to fetch data from an API/Json.

 5. Why do we need a key in .map()?

A unique key helps React identify each item in a list.

 6. What is Conditional Rendering?

Showing different UI based on a condition is called Conditional Rendering.

like This
{isAdded ? "✓ Added to Stack" : "Add to Stack"}

7. How do data move between Parent and Child?

Parent to Child: We use props to pass data.

Child to Parent: We pass a function as a prop, and the child calls that function to send data back.and Its called Lifting up
