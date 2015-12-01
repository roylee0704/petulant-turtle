#React Components

In general, there are 2 ways to create `React Component`.

## 1.0 Class Component
Here an extension of react component, we can do all sort of things, but for class component, it always going need to `render()`, to return a component.

Note, this component will can have  `state`.

### Flavor 1: JSX

```jsx
import React from 'react';

class App extends React.Component {
  render() {
    return (<h1> Hello, Roy </h1>);
  }
}
export default App;
```

### Flavor 2: Transpiled from jsx -> javascripts

```jsx
import React from 'react';

class App extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello, Roy');
  }
}
export default App;
```

## 2.0 Stateless Function Component

Note, this component will not able to hold any `state`.

```jsx
import React from 'react';

const App = () => <h1>Hello, Roy</h1>
export default App;
```
