# Warm-up Exercises

Working in small groups, answer these three questions and write down your answers. We will review your answers together.

1. What is deployment? What tool(s) have you used to deploy your websites before?
2. What is an event handler?
3. You want to render a `CoolNumber` component within your `Main` component. Shown below are the `CoolNumber.js` file, and the `Main.js` file with two lines missing. What should those two lines look like to render 1, the loneliest number?

```js
// CoolNumber.js
import React from 'react';

class CoolNumber extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default CoolNumber;
```

```js
// Main.js
import React from 'react';
// MISSING LINE 1: what goes here?

class Main extends React.Component {
  render() {
    return (
      <main>
        {/*MISSING LINE 2: what goes here?*/}
      </main>
    )
  }
}
```
