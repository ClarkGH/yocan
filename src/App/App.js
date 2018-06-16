import React from 'react';
import TextField from './TextField';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      outputValue: this.state.inputValue,
    })
  }


  render () {
    return (
      <div>
        <TextField text={this.state.outputValue} />

        <form onSubmit={this.handleSubmit}>

          <label> Input:
          <input type="text" placeholder="Type anything" value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;