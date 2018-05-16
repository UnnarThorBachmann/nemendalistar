import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listi1: '',
      listi2: '',
      utkoma:[]
    };

   
  }

  handleChange= (event)=> {
    this.setState({listi1: event.target.value});
  }

  handleChange2= (event)=> {
    this.setState({listi2: event.target.value});
  }

  handleSubmit = (event)=> {
    const {listi1, listi2} = this.state;
    const l1 = listi1.split('\n');
    const l2 = listi2.split('\n');
    console.log(l1);
    console.log(l2);
    const skilalisti = l1.filter(item=> l2.indexOf(item) != -1);
    this.setState({utkoma: skilalisti});

    event.preventDefault();
  }
  render() {
    return (
      <div style={{'padding': '5%'}}>
      <form onSubmit={this.handleSubmit}>
        <p>
          Útskriftarnemar:
        </p>
        <textarea style={{width: '400px', height: '100px'}}value={this.state.listi1} onChange={this.handleChange} />
       
        <p>
          Mínir nemendur:
        </p>
        
        <textarea style={{width: '400px', height: '100px'}}value={this.state.listi2} onChange={this.handleChange2} />
        <br/>
        <input type="submit" value="Bera saman" />
      </form>
      <ol>
      {
        this.state.utkoma.map(item=> <li>{item}</li>)
      }
      </ol>
      </div>
    );
  }
}

export default App;
