import React from 'react';

class App extends React.Component {
  render() {

    let name = this.props.txt;
    return (
      <h1>Hello, {name}</h1>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'Roy'
};

//stateless function Component
// const App = (props) => <h1> Hello, {props.txt}</h1>
export default App;
