import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'this is a state txt'};
  }
  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    let name = this.props.txt;
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}></input>
        <h1>Hello, {this.state.txt}</h1>
      </div>
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
